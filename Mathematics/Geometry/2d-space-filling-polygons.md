# 2D space filling with regular polygons

To fill a bounding rectangle perfectly with random polygons, the gold-standard approach is to use a Voronoi Diagram clipped to the rectangular bounds. This technique partitions a 2D space into contiguous, non-overlapping polygonal cells (convex polygons) based on distances to a set of randomly generated seed points.Here is the step-by-step algorithm and Python implementation to achieve this.The Algorithm1. Define the bounding box dimensions (width, height).
2. Generate N random (x, y) seed points inside the box.
3. Compute the Voronoi diagram for these seed points.
4. For each Voronoi cell:
    a. Get the polygon defining the cell's boundaries.
    b. Intersect (clip) this polygon with the bounding box.
5. (Optional) Apply Lloyd's relaxation to make polygon sizes more uniform.
6. (Optional) Shrink the resulting polygons slightly to leave visible gaps.
Python ImplementationYou will need the scipy library for calculating the Voronoi tessellation and the shapely library for handling geometric polygon clipping.pythonimport numpy as np
import matplotlib.pyplot as plt
from scipy.spatial import Voronoi
from shapely.geometry import Polygon, box

def fill_rectangle_with_polygons(width, height, num_polygons, buffer_distance=-0.5):
    """
    Fills a rectangle with random, non-overlapping polygons.
    
    Parameters:
    - width, height: Dimensions of the bounding rectangle.
    - num_polygons: Number of random polygonal cells to generate.
    - buffer_distance: Negative value shrinks polygons to create gaps/borders.
    """
    # 1. Define the bounding box geometry
    bounding_box = box(0, 0, width, height)
    
    # 2. Generate random seed points within the rectangle
    # We add padding to the seeds to prevent extreme edge stretching
    seeds = np.column_stack((
        np.random.uniform(0, width, num_polygons),
        np.random.uniform(0, height, num_polygons)
    ))
    
    # To handle infinite/outer Voronoi cells properly, we add dummy points far outside the box
    far_points = np.array([
        [-width, -height], [-width, 2*height], [2*width, -height], [2*width, 2*height]
    ])
    all_points = np.vstack([seeds, far_points])
    
    # 3. Compute Voronoi Diagram
    vor = Voronoi(all_points)
    
    polygons = []
    
    # 4. Iterate over the regions corresponding to our original seeds
    # (Excluding the far_points we added at the end)
    for point_idx in range(num_polygons):
        region_idx = vor.point_region[point_idx]
        region_vertices = vor.regions[region_idx]
        
        # Ensure it's a valid closed region
        if -1 not in region_vertices and len(region_vertices) > 0:
            # Reconstruct the raw polygon coordinates
            cell_coords = [vor.vertices[i] for i in region_vertices]
            cell_poly = Polygon(cell_coords)
            
            # Clip the polygon to the boundaries of the rectangle
            clipped_poly = cell_poly.intersection(bounding_box)
            
            if not clipped_poly.is_empty:
                # 5. Optional: Shrink polygons slightly to make them visually distinct
                if buffer_distance != 0:
                    clipped_poly = clipped_poly.buffer(buffer_distance)
                
                if not clipped_poly.is_empty:
                    polygons.append(clipped_poly)
                    
    return polygons

# --- Visualizing the Result ---
width, height = 100, 60
polygons = fill_rectangle_with_polygons(width, height, num_polygons=30, buffer_distance=-1.0)

fig, ax = plt.subplots(figsize=(10, 6))
ax.set_xlim(-5, width + 5)
ax.set_ylim(-5, height + 5)
ax.set_aspect('equal')

# Draw the bounding rectangle outline
rect_patch = plt.Rectangle((0, 0), width, height, edgecolor='black', facecolor='none', lw=2)
ax.add_patch(rect_patch)

# Draw the generated random polygons
for poly in polygons:
    if poly.geom_type == 'Polygon':
        x, y = poly.exterior.xy
        ax.fill(x, y, alpha=0.6, edgecolor='black', linewidth=1.5)
    elif poly.geom_type == 'MultiPolygon': # Handle edge cases where a cell splits
        for sub_poly in poly.geoms:
            x, y = sub_poly.exterior.xy
            ax.fill(x, y, alpha=0.6, edgecolor='black', linewidth=1.5)

plt.title(f"Rectangle Filled with {len(polygons)} Random Polygons")
plt.axis('off')
plt.show()
Use code with caution.Alternative AlgorithmsIf you want different visual styles, consider these alternative approaches:Binary Space Partitioning (BSP): Start with the full rectangle. Choose a random orientation (horizontal or vertical) and a random position to split the rectangle into two. Recursively split the resulting sub-rectangles until you reach a desired number of blocks. This creates a geometric grid-like mesh of smaller rectangles.Delaunay Triangulation: Generate random points inside the rectangle, including the 4 corners. Use Delaunay Triangulation to connect the points into non-overlapping triangles. This guarantees that your entire rectangle is packed with triangular polygons.Lloyd's Relaxation (Smoothing): If your Voronoi cells look too jagged or uneven, you can smooth them out. Calculate the centroid (center of mass) of each polygon cell, move the original seed point to that centroid, and recompute the Voronoi diagram. Doing this 2 to 5 times creates highly organic, uniform cells (similar to dragonfly wings or cracks in dried mud).If you would like to customize this further, let me know:What programming language or framework you are using?Do you need the shapes to look like organic cracks/cells or geometric triangles/rectangles?Should the polygons have a gap between them or be completely seamless?Stack OverflowAlgorithm to fit random polygons in set rectangle - Stack Overflow4 May 2017 — I have a canvas (SVG based), which acts as the rectangle. In this rectangle I want to fill various triangles, and polygons with up to 6 sides.Geographic Information Systems Stack ExchangeGenerate N random polygons without overlap in a given area with ...20 Sept 2022 — ¹ You could extract 3 Points per cluster and polygonize them into triangles - this can only work reliably with triangles, though. Another way would be to get th...ResearchGateAn Algorithm to Generate Random Points in Polygon Based on Triangulation17 Jan 2020 — * IOP Conf. ... * Algorithm Flow. * then allocates random points proportionally according to the area of each triangle after triangulation, * and finally genera...        
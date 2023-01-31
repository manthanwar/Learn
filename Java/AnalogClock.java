
import java.awt.geom.*;
import java.awt.*;

// import java.awt.geom.AffineTransform;

// import java.awt.Color;
// import java.awt.Graphics;
// import java.awt.Graphics2D;
// import java.awt.Rectangle;

// import java.awt.Shape;

import javax.swing.JPanel;
import javax.swing.SwingUtilities;

public class AnalogClock extends JPanel {
  @Override
  protected void paintComponent(Graphics g) {
    super.paintComponent(g);
    Graphics2D g2 = (Graphics2D) g.create();
    // g2.setRenderingHint(RenderingHints.KEY_ANTIALIASING,
    // RenderingHints.VALUE_ANTIALIAS_ON);
    Rectangle rect = SwingUtilities.calculateInnerArea(this, null);
    g2.setColor(Color.BLACK);
    g2.fill(rect);

    float radius = Math.min(rect.width, rect.height) / 2f - 10f;
    g2.translate(rect.getCenterX(), rect.getCenterY());

    // Drawing the hour and minute markers
    float hourMarkerLen = radius / 6f - 10f;
    Shape hourMarker = new Line2D.Float(0f, hourMarkerLen - radius, 0f, -radius);
    Shape minuteMarker = new Line2D.Float(0f, hourMarkerLen / 2f - radius, 0f, -radius);
    AffineTransform at = AffineTransform.getRotateInstance(0d);
    g2.setStroke(new BasicStroke(2f));
    g2.setColor(Color.WHITE);
    for (int i = 0; i < 60; i++) {
      if (i % 5 == 0) {
        g2.draw(at.createTransformedShape(hourMarker));
      } else {
        g2.draw(at.createTransformedShape(minuteMarker));
      }
      at.rotate(Math.PI / 30d);
    }

  }

}
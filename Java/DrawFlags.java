import java.awt.*;
import java.awt.geom.AffineTransform;

import javax.swing.JFrame;

public class DrawFlags extends Canvas {

    public void paint(Graphics g) {
        // g.drawString("Hello", 40, 40);
        // setBackground(Color.WHITE);
        // g.fillRect(130, 30, 100, 80);
        // g.drawOval(30, 130, 50, 60);
        // setForeground(Color.RED);
        // g.fillOval(130, 130, 50, 60);
        // g.drawArc(30, 200, 40, 50, 90, 60);
        // g.fillArc(30, 130, 40, 50, 180, 40);

        // Saffron
        g.setColor(Color.decode("#FF9933"));
        g.drawRect(10, 10, 450, 100);
        g.fillRect(10, 10, 450, 100);

        // White
        g.setColor(Color.WHITE);
        g.drawRect(10, 110, 450, 100);
        g.fillRect(10, 110, 450, 100);

        // Green
        g.setColor(Color.decode("#138808"));
        g.drawRect(10, 210, 450, 100);
        g.fillRect(10, 210, 450, 100);

        // Pole
        // g.setColor(Color.BLACK);
        // g.fillRect(10, 10, 10, 400);

        // Blue
        g.setColor(Color.decode("#000080"));
        g.drawOval(185, 110, 100, 100);
        g.fillOval(185, 110, 100, 100);

        // Text
        g.setColor(Color.BLACK);
        g.setFont(new Font("Arial", Font.BOLD, 40));
        String text = "Flag of India";
        int width = g.getFontMetrics().stringWidth(text);
        g.drawString(text, (235 - width / 2), 350);

        Graphics2D g2d = (Graphics2D) g;
        AffineTransform old = g2d.getTransform();
        // g2d.rotate(Math.toRadians(-20));
        // g2d.rotate(Math.toRadians(-0), 55, 165);
        // g2d.rotate(Math.toRadians(-20), 230, 155);\

        int xCenter = getWidth() / 2;
        int yCenter = getHeight() / 2;

        g2d.rotate(Math.toRadians(-20), xCenter - 0, yCenter - 0);

        // draw shape/image (will be rotated)

        g2d.fillRect(10, 140, 450, 40);

        g2d.setTransform(old);
        // things you draw after here will not be rotated

        g.setColor(Color.RED);
        g.fillOval(230, 155, 10, 10);

        g.setColor(Color.GREEN);
        g.fillOval(105, 185, 10, 10);

    }

    public static void main(String[] args) {
        DrawFlags m = new DrawFlags();
        JFrame f = new JFrame();
        f.add(m);
        f.setLocation(500, 100);
        f.setSize(500, 400);

        // f.setLayout(null);
        f.setVisible(true);
        // f.setDefaultCloseOperation(JFrame.DISPOSE_ON_CLOSE);
        f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        f.setTitle("Draw Flag of India!");

    }

}
import java.awt.*;
import java.awt.geom.AffineTransform;

public class FlagIN extends Canvas {

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

        g.setColor(Color.RED);
        g.fillOval(230, 110, 10, 10);

        // Text
        g.setColor(Color.BLACK);
        g.setFont(new Font("Arial", Font.BOLD, 40));
        String text = "Flag of India";
        int width = g.getFontMetrics().stringWidth(text);
        g.drawString(text, (235 - width / 2), 350);

        Graphics2D g2d = (Graphics2D) g;
        AffineTransform old = g2d.getTransform();
        g2d.rotate(Math.toRadians(-0));
        // draw shape/image (will be rotated)

        g2d.fillRect(10, 150, 150, 40);

        g2d.setTransform(old);
        // things you draw after here will not be rotated
    }

}
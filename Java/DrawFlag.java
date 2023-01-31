import javax.swing.JFrame;

public class DrawFlag {
    public static void main(String[] args) {
        // FlagShapes m = new FlagShapes();

        // FlagIN m = new FlagIN();

        AnalogClock m = new AnalogClock();

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

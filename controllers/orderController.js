    // In your backend controller file, e.g., controllers/orderController.js
    const Order = require('../models/Order');

    exports.deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        await Order.findByIdAndDelete(orderId);
        res.status(200).json({ success: true, message: 'Order deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting order', error });
    }
    };

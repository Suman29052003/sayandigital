import stdBCard_1 from '../../assets/itemsImage/businessCards/300gsm_card_1.png'
import stdBCard_2 from '../../assets/itemsImage/businessCards/300gsm_card_2.png'

import dSideCard_1 from '../../assets/itemsImage/businessCards/both_side_card_1.png'
import dSideCard_2 from '../../assets/itemsImage/businessCards/both_side_card_2.png'

import pvcCard_1 from '../../assets/itemsImage/businessCards/pvc_card_1.png'
const businessCardsList = [
    {
        id: 1,
        title: 'Standard Business Cards',
        subTitle: 'Professional business cards to leave a lasting impression!',
        promo_1: 'Single-sided printing with premium finish',
        promo_2: 'High-quality cardstock for durability',
        promo_3: 'Customizable with logos, text, and colors',
        price: '₹ 150.00 for 100 cards', 
        image_1: stdBCard_1,
        image_2: stdBCard_2
    },
    {
        id: 2,
        title: 'Double-Sided Business Cards',
        subTitle: 'Professional double-sided business cards for extra information!',
        promo_1: 'Double-sided printing with a sleek design',
        promo_2: 'High-quality cardstock for a professional feel',
        promo_3: 'Customizable with logos, text, and additional details',
        price: '₹ 200.00 for 100 cards' ,
        image_1: dSideCard_1,
        image_2: dSideCard_2
    },
    {
        id: 3,
        title: 'PVC Business Cards',
        subTitle: 'Durable PVC business cards for a modern and premium look!',
        promo_1: 'Waterproof and long-lasting PVC material',
        promo_2: 'Customizable with full-color designs',
        promo_3: 'Perfect for professionals seeking high-quality cards',
        price: '₹ 300.00 for 50 cards' ,
        image_1: pvcCard_1,
        // image_2: stdBCard_2
    }

]

export default businessCardsList
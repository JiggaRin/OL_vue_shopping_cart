export default {
    state: {
        products: [
            {
                id: 1,
                src: 'https://i.ebayimg.com/images/g/oK4AAOSw3~dgriCG/s-l1600.jpg',
                price: 25.25,
                title: 'Gaming Keyboard USB Wired 61 Keys RGB LED Backlit for PS4 PC MAC Office Game',
                features: 'Ergonomic, RGB Backlit, ABS Floating Keycap, Enhanced Function Keys, Illuminated, Plug & Play, Portable'
            },
            {
                id: 2,
                src: 'https://m.media-amazon.com/images/I/71z6gsI87bL._AC_SL1500_.jpg',
                price: 29.55,
                title: 'Fiodio Rainbow Membrane Gaming Keyboard, Quiet Wired Computer Keyboard',
                features: '104 Silent Keys, 26 Anti-Ghosting Keys, Spill Resistant, Multimedia Control for PC and Desktop'
            },
            {
                id: 3,
                src: 'https://resource.logitech.com/w_797,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/k740/k740-feature-05.jpg?v=1',
                price: 59.75,
                title: 'ILLUMINATED KEYBOARD K740',
                features: 'The PerfectStroke key system distributes typing force evenly across the key surfaces making every keystroke quiet, natural and fluid—even if you strike the edge of a key.'
            },
            {
                id: 4,
                src: 'https://resource.logitech.com/w_797,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/keyboards/multi-keyboard-k380/k380-feature-06.jpg?v=1',
                price: 29.55,
                title: 'K380 MULTI-DEVICE BLUETOOTH KEYBOARD',
                features: 'Connect up to three devices—even with different operating systems— and switch between them with a tap. So you can type, switch, and keep on typing.'
            }
        ],
    },
    getters: {
        allProducts(state) {
            return state.products
        }
    }
}
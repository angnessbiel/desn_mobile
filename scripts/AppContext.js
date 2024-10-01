import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);
    const [lanches, setLanches] = useState([
        {
            id: '1',
            name: 'Laranja',
            local: 'Mercado Lima',
            price: 8.49,
            img: 'https://static.wixstatic.com/media/d40923_64569dd49a3a45c5b075dfe21d291463~mv2.jpg/v1/crop/x_2,y_46,w_1000,h_658/fill/w_400,h_260,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d40923_64569dd49a3a45c5b075dfe21d291463~mv2.jpg',
        },
        {
            id: '2',
            name: 'Maçã',
            local: 'Mercado Lima',
            price: 29.99,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDdmtlJT1cgwPdda4mAqua8S6gGj1dA1y8A&s',
        },
        {
            id: '3',
            name: 'Melancia',
            local: 'Mercado Lima',
            price: 7.98,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgSUIaBT8IyNqSvEVXvzPr7HPRlgmd3i0XSg&s',
        },
        {
            id: '4',
            name: 'Mamão',
            local: 'Mercado Lima',
            price: 14.50,
            img: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/Mamao-Papaya[1]-1000x1000.jpg',
        }
    ]);
    

        
    return <AppContext.Provider value={{ carrinho, setCarrinho, lanches, setLanches }}>
    {children}
</AppContext.Provider>;
}
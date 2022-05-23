import styledComponent from "styled-components";

export default function ColectBuyersName () {
    return (
        <>
            <label htmlFor = "name">Nome do comprador:</label>
            <input id = "nome" type = "text" htmlFor = "nome" placeholder = "Digite seu nome..." required onChange={e => setNome(e.target.value)} />
        </>
    );
}
                
const BuyersName = styledComponent.label`
    width: 100%;
    font-size: 18px;
    color: #293845;
    margin-bottom: 2px;
    text-align: start;
`;

const BuyersNameInput = styledComponent.input`
    font-size: 18px;
    line-height: 21px;
    width: 100%;
    height: 50px;
    margin-bottom: 7px;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    padding: 18px;
`;
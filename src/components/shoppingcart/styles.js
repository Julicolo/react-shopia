import styled from 'styled-components';

export const ShoppingCartSummary = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 100%;
  min-width: 325px;
  z-index: 3000;
  background-color: var(--dark-black);
  position: absolute;
  top: 64px;
  right: 0vw;
  border: 3px solid var(--main-color);
  user-select: none;
  font-size: 0.75rem;
  .cart-price-button {
    display: flex;
    align-items: center;
    span {
      margin: 0 0.25rem;
    }
  }
  .cart-sum {
    margin: 0.5rem;
  }
`;

export const ShoppingCartItems = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-flow: row wrap;
  div {
    display: flex;
    flex-flow: column wrap;
    text-align: center;
    h3 {
      padding: 0.5rem;
      margin: 0;
    }
    span {
      padding: 0.5rem;
      border-bottom: 1px solid var(--main-color);
    }
  }
  .product-name {
    min-width: 150px;
    text-align: left;
  }
`;

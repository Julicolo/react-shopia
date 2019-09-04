import styled from 'styled-components';

export const ShoppingCartSummary = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 400px;
  z-index: 3000;
  background-color: var(--dark-black);
  position: absolute;
  top: 64px;
  right: -20px;
  border: 3px solid var(--main-color);
  user-select: none;
  .item-container {
    width: 100%;
    padding: 0.5rem;
    .cart-product {
      display: flex;
      justify-content: space-between;
      margin: 0.75rem 0.5rem;
    }
    .cart-price-button {
      display: flex;
      align-items: center;
      span {
        margin: 0 0.25rem;
      }
    }
  }
  .cart-sum {
    margin: 0.5rem;
  }
`;

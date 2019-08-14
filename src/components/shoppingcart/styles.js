import styled from 'styled-components';

export const ShoppingCartSummary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  width: 400px;
  z-index: 3000;
  background-color: var(--dark-black);
  position: absolute;
  top: 60px;
  right: 0;
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
    .cart-sum {
    }
  }
`;

import CartList from "../../components/CartList";
import Layout from "../../layout";
import styled from "styled-components";
import Link from "next/link";
import { AppRoutes } from "../../utils/constants";
import { Button, InputField } from "../../reusables";

export default function Cart() {
  return (
    <Layout
      title="Account - Cart"
      content={
        <Container>
          <div className="left">
            <h1>Cart</h1>
            <br />
            <div className="table_header">
              <div>S/N</div>
              <div>Product</div>
              <div>Image</div>
              <div>Price</div>
              <div>Quantity</div>
              <div>Subtotal</div>
              <div>...</div>
            </div>
            <CartList />
            <div className="table_footer">
              <div className="flex">
                <InputField placeholder="coupon code" />
                <Button text="Apply Coupon" primary />
              </div>
              <Button text="Update Cart" primary />
            </div>
            <br />
            <div className="cart_details">
              <h1>Cart Total</h1>
              <div className="subtotal">
                <h4>Subtotal</h4>
                <p>$599.00</p>
              </div>
              <div className="total">
                <h4>Total</h4>
                <p>
                  <b>$599.00</b>
                </p>
              </div>
              <br />
              <Button full text="Proceed to checkout" primary />
            </div>
          </div>
          <div className="right_frame">
            <br />
            <b>Recent Post</b>
            <Link href={AppRoutes.blog}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius
            </Link>
            <Link href={AppRoutes.blog}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius,
            </Link>
            <Link href={AppRoutes.blog}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius,
            </Link>
            <Link href={AppRoutes.blog}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius,
            </Link>
            <Link href={AppRoutes.blog}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              gravida, massa a vestibulum varius,
            </Link>
          </div>
        </Container>
      }
    />
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap:2rem;
  }

  .table_header {
    display: grid;
    grid-template-columns: 0.5fr 3fr 1fr 1fr 1fr 1fr 0.5fr;
    align-items: center;
    padding: 0.25rem 1rem;
    font-weight: 300;
    font-size: 1.1rem;
    border: 1px solid #bdbdbd;
    border-radius: 3px 3px 0 0;
  }

  .table_footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    font-weight: 300;
    font-size: 1.1rem;
    border-bottom: 1px solid #bdbdbd;
    border-left: 1px solid #bdbdbd;
    border-right: 1px solid #bdbdbd;
    border-radius: 0 0 3px 3px;
  }

  .cart_details {
    width: 400px;
    float: right;

    h1 {
      font-size: 1.7em;
      font-weight: bold;
      margin-bottom: 1rem;

      @media screen and (max-width: 768px) {
        font-size: 1.2em;
      }
    }

    .subtotal {
      display: flex;
      padding: 0.25rem 1rem;
      font-weight: 300;
      font-size: 1.1rem;
      border: 1px solid #bdbdbd;
      border-radius: 3px 3px 0 0;

      @media screen and (max-width: 768px) {
        font-size: 1em;
      }
    }

    h4 {
      font-weight: 600;
      font-size: 1.1rem;

      @media screen and (max-width: 768px) {
        font-size: 1em;
      }
    }

    h4,
    p {
      width: 50%;
      margin: 0;
      padding: 0;
    }

    .total {
      display: flex;
      padding: 0.25rem 1rem;
      font-weight: 300;
      font-size: 1.1rem;
      border-bottom: 1px solid #bdbdbd;
      border-left: 1px solid #bdbdbd;
      border-right: 1px solid #bdbdbd;
      border-radius: 0 0 3px 3px;

       @media screen and (max-width: 768px) {
        font-size: 1em;
      }
    }
  }

  .right_frame {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    a {
      text-decoration: underline;
    }
  }
`;

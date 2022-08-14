import CartList from "../../components/CartList";
import Layout from "../../layout";
import styled from "styled-components";
import Link from "next/link";
import { AppRoutes } from "../../utils/constants";
import { Button, InputField } from "../../reusables";

export default function Checkout() {
  return (
    <Layout
      title="Account - Checkout"
      content={
        <Container>
          <div className="left">
            <h1>Checkout</h1>
            <form action="">
              <hr />
              <h3>Billing details</h3>
              <div className="flex">
                <div className="group">
                  <p>
                    First name <span>*</span>
                  </p>
                  <InputField full />
                </div>
                <div className="group">
                  <p>
                    Last name <span>*</span>
                  </p>
                  <InputField full />
                </div>
              </div>
              <div className="flex">
                <div className="group">
                  <p>
                    Email <span>*</span>
                  </p>
                  <InputField full />
                </div>
                <div className="group">
                  <p>
                    Phone Number <span>*</span>
                  </p>
                  <InputField full />
                </div>
              </div>
              <div className="group">
                <p>
                  Address <span>*</span>
                </p>
                <InputField full />
              </div>
              <div className="flex">
                <div className="group">
                  <p>
                    Country <span>*</span>
                  </p>
                  <InputField full />
                </div>
                <div className="group">
                  <p>
                    Zip Code <span>*</span>
                  </p>
                  <InputField full />
                </div>
              </div>
              <div className="order_details">
                <h3>
                  <b>Your order</b>
                </h3>
                <div className="table_header">
                  <h4>Product</h4>
                  <h4>Subtotal</h4>
                </div>
                <OrderList>
                  <h4>
                    Design and Relax <span>x 1</span>
                  </h4>
                  <h4>$599.00</h4>
                </OrderList>
                <div className="table_footer">
                  <h4>Total</h4>
                  <h4>$599.00</h4>
                </div>
              </div>
              <br />
              <Button text="Place order" primary />
            </form>
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

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .table_header {
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    padding: 0.25rem 1rem;
    font-weight: 300;
    font-size: 1.1rem;
    border: 1px solid #bdbdbd;
    border-radius: 3px 3px 0 0;

    h4 {
      font-weight: 500;
      font-size: 1rem;
    }
  }

  .table_footer {
    display: grid;
    grid-template-columns: 3fr 1fr;
    align-items: center;
    padding: 0.25rem 1rem;
    font-weight: 300;
    font-size: 1.1rem;
    border-bottom: 1px solid #bdbdbd;
    border-left: 1px solid #bdbdbd;
    border-right: 1px solid #bdbdbd;
    border-radius: 0 0 3px 3px;

    h4 {
      font-weight: 500;
      font-size: 1rem;
    }
  }

  form {
    padding: 0 0 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 70%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    .flex {
      width: 100%;
      display: flex;
      gap: 1rem;

      @media screen and (max-width: 425px) {
        flex-direction: column;
      }
    }

    .group {
      width: 100%;
    }

    p {
      margin: 0;
      paddding: 0;
      font-weight: 300;
      font-size: 1rem;

      span {
        color: red;
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

const OrderList = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  padding: 0.25rem 1rem;
  font-weight: 300;
  font-size: 1.1rem;
  border-bottom: 1px solid #bdbdbd;
  border-left: 1px solid #bdbdbd;
  border-right: 1px solid #bdbdbd;

  h4 {
    font-weight: 300;
    font-size: 1rem;

    span {
      font-weight: 500;
    }
  }
`;

import React from "react";
import styled from "styled-components";
import { HiArrowNarrowRight } from "react-icons/hi";
import avatarImage from "../assets/avatarImage.jpeg";
import { cardStyles } from "./ReusableStyles";

export default function Transfers() {
  const transactions = [
    {
      // image: avatarImage,
      name: "Assigned by Hema",
      time: "Today, 16:36",
      status: "Completed",
    },
    {
      // image: avatarImage,
      name: "Assigned by Shahana",
      time: "Today, 08:49",
      status: "completed",
    },
    {
      // image: avatarImage,
      name: "Assigned by Hema",
      time: "Yesterday, 14:36",
      status: "Inprogress",
    },
  ];
  return (
    <Section>
      <div className="title">
        <h2>Your Activity</h2>
      </div>
      <div className="transactions">
        {transactions.map((transaction) => {
          return (
            <div className="transaction">
              <div className="transaction__title">
                <div className="transaction__title__image">
                  <img src={transaction.image} alt="" />
                </div>
                <div className="transaction__title__details">
                  <h3>{transaction.name}</h3>
                  <h5>{transaction.time}</h5>
                </div>
              </div>
              <div className="transaction__amount">
                <span>{transaction.status}</span>
              </div>
            </div>
          );
        })}
      </div>
      <a className="view" href="#">
        View all <HiArrowNarrowRight />
      </a>
    </Section>
  );
}

const Section = styled.section`
  ${cardStyles};
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .title {
    h2 {
      color: #f1c232;
      letter-spacing: 0.3rem;
    }
  }
  .transactions {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    .transaction {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &__title {
        display: flex;
        gap: 1rem;
        &__image {
          img {
            height: 2.5rem;
            border-radius: 3rem;
          }
        }
        &__details {
        }
      }
      &__amount {
        background-color: #d7e41e1d;
        padding: 0.2rem 0.5rem;
        width: 4rem;
        border-radius: 1rem;
        text-align: center;
        transition: 0.3s ease-in-out;
        &:hover {
          background-color: #f1c232;
          span {
            color: black;
          }
        }
        span {
          color: #f1c232;
        }
      }
    }
  }
  .view {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-decoration: none;
    color: #f1c232;
    font-weight: bold;
    margin-top: 1rem;
    gap: 0.5rem;
    svg {
      transition: 0.3s ease-in-out;
      font-size: 1.4rem;
    }
    &:hover {
      svg {
        transform: translateX(0.5rem);
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 375px) {
    .transactions {
      .transaction {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
  }
`;

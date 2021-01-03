import { useForm } from "react-hook-form";
import { withRouter, Route } from "react-router-dom";
import Axios from "axios";

import styled from "styled-components";

const FeedbackPage = (props) => {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = (values) => {
    console.log(values);

    Axios.post("https://btcdashserver.herokuapp.com/sendemail", {
      email: values.email,
      name: values.name,
      message: values.message,
    }).then((res) => {
      console.log("EMAIL RES", res);
      console.log("EMAIL RES DATA", res.data);
    });

    props.history.replace("/feedback/FeedbackPageSuccess");
  };

  return (
    <div style={{ padding: "50px" }}>
      <FeedbackPageWrapper>
        <Route
          path={props.match.path + "/FeedbackPageSuccess"}
          render={() => (
            <h4 style={{ color: "var(--secondary)" }}>
              SUCCESSFULLY SENT! THANK YOU!
            </h4>
          )}
        />

        <h1 style={{ color: "var(--primary)" }}>Got Feedback / Questions?</h1>
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <InputFieldsGrid>
            <InputfieldWrapper>
              <input
                name="name"
                ref={register({
                  required: "Required",
                  minLength: 2,
                  autoComplete: "off",
                })}
                autoComplete="off"
              />
              <label className="label-name">
                <span className="content-name">Name:* </span>{" "}
              </label>{" "}
              {errors.name && errors.name.message && (
                <p className="error__message">name is required</p>
              )}
            </InputfieldWrapper>

            <InputfieldWrapper>
              <input
                name="email"
                ref={register({
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address",
                  },
                })}
                autoComplete="off"
              />
              <label className="label-name">
                <span className="content-name">e-Mail Adress:*</span>
              </label>
              {errors.email && errors.email.message && (
                <p className="error__message">
                  valid e-mail adress is required
                </p>
              )}
            </InputfieldWrapper>

            <InputfieldWrapper>
              <textarea
                name="message"
                ref={register({
                  required: "Required",
                })}
              />
              <label className="label-name">
                <span className="content-name">Message:*</span>
              </label>
              {errors.message && errors.message.message && (
                <p className="error__message">message is required</p>
              )}
            </InputfieldWrapper>
          </InputFieldsGrid>

          <ButtonSubmit type="submit">
            <span>Submit</span>
          </ButtonSubmit>
        </form>
      </FeedbackPageWrapper>
    </div>
  );
};

export default withRouter(FeedbackPage);

const FeedbackPageWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
  overflow: hidden;

  .error__message {
    position: absolute;
    transform: translateX(-10%);

    right: 0;
    color: var(--danger);
    padding: 0;
    margin: 0;
    font-size: 12px;
  }

  form {
    width: 300px;
    input {
      width: 300px;
      height: 100%;
      padding-top: 15px;
      border: none;
      background: none;
      outline: none;
      color: var(--secondary);

      &:focus + .label-name .content-name,
      &:invalid + .label-name .content-name {
        transform: translateY(-150%);
        font-size: 14px;
        color: var(--primary);
      }

      &:focus + .label-name::after,
      &:invalid + .label-name::after {
        transform: translateX(0%);
      }
    }

    textarea {
      height: 200px;
      width: 100%;
      max-width: 100%;
      padding-top: 15px;
      border: none;
      background: none;
      outline: none;
      color: var(--secondary);

      &:focus + .label-name .content-name,
      &:invalid + .label-name .content-name {
        transform: translateY(-150%);
        font-size: 14px;
        color: var(--primary);
      }

      &:focus + .label-name::after,
      &:invalid + .label-name::after {
        transform: translateX(0%);
      }
    }

    label {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0px;
      bottom: 0px;
      text-align: left;

      pointer-events: none;
      color: var(--secondary);
      border-bottom: 2px solid var(--primary);
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -4px;
        height: 100%;
        width: 100%;
        border-bottom: 4px solid white;

        transform: translateX(-100%);
        transition: all 0.3s ease;
      }
    }

    .content-name {
      position: relative;
      left: 0px;
      bottom: 5px;

      transition: all 0.3s ease;
    }
  }
`;

const InputFieldsGrid = styled.div`
  display: grid;
  width: fit-content;
  margin: 50px auto;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: start;
  gap: 50px 50px;

  color: var(--secondary);
`;

const InputfieldWrapper = styled.div`
  display: grid;
  position: relative;

  justify-content: stretch;
  align-items: center;
`;

const ButtonSubmit = styled.button`
  margin: 0 auto;
  display: flex;
  height: 60px;
  width: 100px;

  align-items: center;
  align-content: center;
  span {
    margin: 0 auto;
  }
`;

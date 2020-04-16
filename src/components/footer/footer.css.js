import styled from 'styled-components';
import { xs, sm } from 'helpers/device';
import { theme } from 'helpers/theme';

export const FooterWrapper = styled.footer`
  background: #292733;
  display: flex;
  flex-wrap: wrap;
  padding-top: 32px;
  margin-top: 32px;

  ${sm}{
    padding: 56px 0 32px;
  }

  p {
    color: ${theme.white};

    span {
      display: block;
      color: #757575;
      
      ${sm} {
        font-size: ${theme.baseSecondary};
      }
    }

    &.heading-txt {
      line-height: 120%;
      font-weight: 700;
      font-size: 20px;

      ${sm} {
        font-size: 24px;
      }

      span {
        color: #DC2B2B;
        font-size: 20px;
        line-height: 120%;

        ${sm} {
          font-size: 24px;
        }
      }
    }

    a {
      color: ${theme.white};
    }
  }

  ul {

    &.social-icons {
      li {
        display: inline-block;
        margin-right: 16px;

        &:last-child {
          margin-right: 0;
        }
  
        a {
          color: #FFFFFF;

          i {
            font-size: 18px;
          }
        }
      }
    }
  }

  .form-group {
    &:last-child {
      margin-bottom: 24px;
    }

    &.has-error {
      input {
        border-color: #f44336;
        box-shadow: 0 2px 10px 0 rgba(244, 67, 54, 0.5);
      }
    }

    input {
      width: 100%;
      height: 40px;
      background: ${theme.white};
      border: 1px solid #ECEAEA;
      border-radius: 2px;
      padding: 16px;
      font-size: 12px;
      line-height: 140%;
      font-weight: 600;
      color: #19181D;

      ${sm}{
        height: 48px;
        font-size: 14px;
      }

      &::placeholder {
        color: #19181D;
      }
    }

    &.custom-file {
      ${xs}{
        height: 40px;
      }

      &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: ${theme.white};
        border-radius: 2px;
      }

      &.has-error {
        &:before {
          border: 1px solid #f44336;
          box-shadow: 0 2px 10px 0 rgba(244, 67, 54, 0.5);
        }
        .upload-btn {
          border: 2px solid #f44336;
        }
      }

      .placeholder-txt {
        position: absolute;
        top: 0;
        left: 16px;
        display: flex;
        align-items: center;
        height: 100%;
        font-style: normal;
        font-size: 12px;
        line-height: 140%;
        font-weight: 600;
        ${sm}{
          font-size: 14px;
        }
      }

      .upload-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        width: 35%;
        height: 100%;
        color: ${theme.white};
        padding: 8px;
        background: #292733;
        border: 4px solid ${theme.white};
        border-radius: 0 2px 2px 0;
        font-size: 12px;
        line-height: 140%;
        ${sm}{
          font-size: 14px;
        }
      }
    }
  }

  .send-btn {
    background: #21C997;
    border-radius: 2px;
    font-size: 12px;
    line-height: 140%;
    color: #FFFFFF;
    font-weight: 600;
    width: 100%;
    display: block;
    padding: 12px;
    margin-bottom: 40px;

    ${sm}{
      font-size: 16px;
    }
  }

  .btm-link {
    color: #757575;
    padding: 20px 0;
    border-top: 1px dashed rgba(255, 255, 255, 0.3);
    display: flex;

    ${xs}{
      font-size: 9px;
      line-height: 150%;
    }

    a {
      color: #757575;

      &.prodjar-link {
        display: inline-block;
        min-width: 64px;
        margin-left: 6px;
        &:before {
          background-size: contain;
          background-position: center left;
        }
      }
    }

    .right-col {
      ${xs}{
        flex: 1 1 100%;
        text-align: right;
      }
      ${sm}{
        margin-left: auto;
      }
    }
  }
`;
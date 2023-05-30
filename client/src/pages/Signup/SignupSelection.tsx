import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { TfiFacebook } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
import { RiKakaoTalkFill } from "react-icons/ri";
const url = `${process.env.REACT_APP_API_URL}`;

type TypeProps = {
  type: string;
};

const Container = styled.div`
  height: 100vh;
  ${({ theme }) => theme.common.flexCenterCol};
  gap: 20px;
  .go-login {
    ${({ theme }) => theme.common.flexCenterRow};
    gap: 10px;
    font-size: 14px;
    color: #b2b2b2;
  }
  .click-to-login {
    color: ${({ theme }) => theme.colors.themeColor};
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
const SelectionContainer = styled.div`
  color: white;
  padding: 60px 70px;
  @media screen and (max-width: 768px) {
    padding: 40px 20px;
  }
  max-width: 600px;
  width: 100%;
  ${({ theme }) => theme.common.flexCenterCol};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  gap: 20px;
  background-color: white;
  @media ${({ theme }) => theme.breakpoints.mobileMax} {
    background-color: inherit;
    border: none;
    gap: 10px;
  }
`;
const BasicSignupBox = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  width: 100%;
  padding: 25px 0px;
  height: 65px;
  background-color: ${({ theme }) => theme.colors.themeColor};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 2px;
  cursor: pointer;
`;
const Contour = styled.hr`
  width: 100%;
  border-color: ${({ theme }) => theme.colors.border};
`;

const OAuthSignUpBox = styled.div<TypeProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${({ type }) => (type === "google" ? "white" : type === "facebook" ? "#3b5998" : "#ffeb00")};
  color: ${({ type }) => (type === "google" || type === "kakao" ? "black" : "white")};
  border: 1px solid ${({ theme }) => theme.colors.border};
  .desc {
    font-size: 18px;
    width: calc(100% - 65px);
    text-align: center;
    @media ${({ theme }) => theme.breakpoints.mobileMax} {
      font-size: 14px;
    }
  }
  border-radius: 2px;
  cursor: pointer;
`;
const OAuthIconContainer = styled.div`
  ${({ theme }) => theme.common.flexCenterCol};
  height: 65px;
  width: 65px;
  padding: 5px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  .icon {
    width: 35px;
  }
  @media screen and (max-width: 768px) {
    height: 55px;
  }
`;
const SignupSelection = () => {
  const navigate = useNavigate();
  const toLogin = () => {
    navigate("/login");
  };
  const toSignTerm = () => {
    navigate("/signup/term");
  };
  const googleOAuthHandler = () => {
    //오어스 구글 인증링크 이동
    window.location.assign(`${url}/oauth2/authorization/google%22%3E%EA%B5%AC%EA%B8%80%EB%A1%9C`);
  };
  const facebookOAuthHandler = () => {
    //오어스 네이버 인증링크로 이동
    window.location.assign(
      `${url}/oauth2/authorization/facebook%22%3E%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%B6%81%EC%9C%BC%EB%A1%9C `,
    );
  };
  const kakaoOAuthHandler = () => {
    window.location.assign(`${url}/oauth2/authorization/kakao%22%3E%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%A1%9C`);
  };
  return (
    <Container>
      <SelectionContainer>
        <BasicSignupBox onClick={toSignTerm}>쇼핑몰 회원가입</BasicSignupBox>
        <Contour />
        <OAuthSignUpBox onClick={googleOAuthHandler} type="google">
          <OAuthIconContainer>
            <FcGoogle size="35" color="black" />
          </OAuthIconContainer>
          <div className="desc">구글로 회원가입</div>
        </OAuthSignUpBox>
        <OAuthSignUpBox onClick={facebookOAuthHandler} type="facebook">
          <OAuthIconContainer>
            <TfiFacebook size="30" color="white" />
          </OAuthIconContainer>
          <div className="desc">페이스북으로 회원가입</div>
        </OAuthSignUpBox>
        <OAuthSignUpBox onClick={kakaoOAuthHandler} type="kakao">
          <OAuthIconContainer>
            <RiKakaoTalkFill size="35" color="black" />
          </OAuthIconContainer>
          <div className="desc">카카오톡으로 시작하기</div>
        </OAuthSignUpBox>
      </SelectionContainer>
      <div className="go-login">
        이미 회원이신가요?
        <div onClick={toLogin} className="click-to-login">
          로그인
        </div>
      </div>
    </Container>
  );
};
export default SignupSelection;

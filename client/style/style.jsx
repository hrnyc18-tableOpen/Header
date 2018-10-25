import styled from 'styled-components';

// const styles = {


//   OptionsItem: styled.li`
//   float: left;
//   display: block;
//   text-align: center;
//   padding: 0px 14px;
//   margin: 0;
//   border:0;
//   `,
//   OptionsList: styled.ul`
//   float: right;
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   border:0;
//   `,
//   OptionsBackground: styled.div`
//   border: 0;
//   padding: 0;
//   margin: 0;
//   position: relative;

//   overflow: hidden;
//   background-color: #999;
//   `,
//   Logo: styled.img`
//   width: 200px;
//   height: auto;
//   `,
//   WhiteList: styled.ul`
//   float: left;
//   list-style-type: none;
//   margin: 0;
//   padding: 0;
//   border:0;
//   `,
//   WhiteBackground: styled(styles.OptionsBackground)`
//     `,

// };


const styles = {}


styles.Li = styled.li`
  float: left;
  display: block;
  text-align: center;
  padding: 0px 14px;
  margin: 0;
  border:0;
  `;
styles.Ul = styled.ul`
  float: left;
  list-style-type: none;
  margin: 0;
  padding: 0;
  border:0;
  `;
styles.Banner = styled.div`
  border: 0;
  padding: 0;
  margin: 0;
  position: relative;
  overflow: hidden;
  `;
styles.Logo = styled.img`
  width: 200px;
  height: auto;
  `;
styles.RightUl = styled(styles.Ul)`
  float: right;
  `;
styles.GrayBanner = styled(styles.Banner)`
background-color: #999;
`;


export default styles;

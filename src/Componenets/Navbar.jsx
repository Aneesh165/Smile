import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";


const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section'); 
      let currentSection = 'home'; 

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150; 
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
          currentSection = section.getAttribute('id'); 
        }
      });

      setActiveSection(currentSection);
    };

    
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className="flex justify-between pl-5 pr-8 py-4 z-50 fixed w-[100%] bg-white">
      {/* logo */}
      <div>
        <svg
          width="188"
          height="57"
          viewBox="0 0 188 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_407_690)">
            <path
              d="M23.5913 19.0658C23.5913 22.9259 21.9482 26.0514 19.9224 26.0514C17.8967 26.0514 16.2535 22.9216 16.2535 19.0658C16.2535 15.2099 17.8967 12.0801 19.9224 12.0801C21.9482 12.0801 23.5913 15.2099 23.5913 19.0658Z"
              fill="#F58220"
            />
            <path
              d="M22.9044 23.1264C22.9914 22.6265 23.0435 22.0788 23.0435 21.505C23.0435 19.088 22.1828 17.1362 21.1221 17.1362C20.0615 17.1362 19.2007 19.088 19.2007 21.505C19.2007 23.7046 19.918 25.5173 20.8483 25.8216C21.6916 25.4043 22.4132 24.4349 22.9044 23.1264Z"
              fill="#231F20"
            />
            <path
              d="M58.0198 14.8928C57.9937 14.519 57.972 14.1495 57.9329 13.7756L57.7894 12.6628L57.7503 12.3846L57.7416 12.315L57.7155 12.1672L57.6895 12.0412L57.5808 11.5282L57.4764 11.0196L57.4199 10.7631L57.333 10.4675L56.9678 9.2808C56.8331 8.89391 56.6636 8.54615 56.5114 8.17665C56.368 7.80715 56.168 7.45939 55.9724 7.10728C55.7811 6.75517 55.5898 6.40306 55.3464 6.07703C54.4509 4.7338 53.2902 3.52532 51.9122 2.61679C49.1736 0.760609 45.7047 0.138983 42.527 0.699751L41.9314 0.821467L41.6359 0.882326L41.4881 0.917102L41.2881 0.973614L40.2883 1.27356L39.1407 1.70392L38.0974 2.16035C36.7454 2.78198 35.5239 3.46446 34.3676 3.97307C33.2113 4.49036 32.1332 4.82074 31.0508 4.86421C29.9728 4.92072 28.8599 4.67294 27.7297 4.26867C27.1646 4.08609 26.6038 3.79919 26.0387 3.52967L25.078 3.06019C24.7563 2.9037 24.326 2.73416 23.9521 2.57767C22.4828 2.0256 20.9527 1.66045 19.3573 1.53873C17.7706 1.42136 16.097 1.52569 14.4669 2.12558C12.8411 2.69939 11.3023 3.82961 10.3068 5.30761C10.3503 5.23805 10.2198 5.43802 10.2285 5.42932L10.2111 5.45541L10.1764 5.51192L10.1112 5.62494L9.98075 5.85099L9.71559 6.30308C9.53301 6.65519 9.34174 7.09424 9.16786 7.48982C8.86791 8.27228 8.64622 9.02432 8.48972 9.80679C8.18108 11.3543 8.12022 12.8932 8.17674 14.3799C8.30715 17.3663 8.91138 20.1919 9.54605 22.9174L10.4763 26.9863L10.7067 28.0035C6.00322 25.3257 3.44716 21.3482 2.41257 19.3833C2.86466 17.4836 1.98221 15.3927 1.98221 15.3927C2.12132 19.7571 -0.00872803 22.0002 -0.00872803 22.0002C1.43449 21.4742 2.11262 20.5179 2.38649 19.4876C4.98167 25.4213 8.14196 29.112 11.5066 31.2507L11.9934 33.1547C12.1586 33.8111 12.3629 34.4892 12.5542 35.1587L13.667 39.171C14.4321 41.8705 15.2798 44.6309 16.6404 47.2217L17.149 48.1954L17.7619 49.117L18.3792 50.0342L18.401 50.0603L18.4575 50.1342L18.5009 50.1864L18.5879 50.2864L18.7574 50.4863C18.8748 50.6211 18.9748 50.7472 19.1052 50.8863C19.7355 51.4948 20.3962 52.086 21.4613 52.2773C21.7308 52.3034 21.996 52.3425 22.2655 52.2773C22.4002 52.2556 22.535 52.2251 22.6654 52.1991L23.0175 52.0469C23.4913 51.8339 23.8261 51.5166 24.1217 51.2036C24.6911 50.5646 25.0519 49.8821 25.3562 49.204L25.5692 48.6954L25.7822 48.152L25.8213 48.0216L25.8692 47.8216C25.8996 47.6781 25.9039 47.6129 25.9213 47.5043L25.9822 46.9565C26.1082 45.5438 26.1995 44.1875 26.4082 42.8355C26.6125 41.4967 26.8951 40.1578 27.4515 38.9797C27.7297 38.3972 28.0818 37.8582 28.5469 37.467C29.0121 37.0844 29.5989 36.8888 30.2249 36.9018H30.264L30.3336 36.8932C30.8074 36.8149 31.3682 36.8888 31.7898 37.0975C32.2202 37.3105 32.5375 37.6843 32.7375 38.1321C32.794 38.2407 32.8375 38.3538 32.8679 38.4798C32.9027 38.6015 32.9505 38.7189 32.9679 38.8493L33.0374 39.2362L33.0983 39.6709C33.1765 40.2447 33.2809 40.8446 33.3808 41.4184C33.7981 43.7267 34.3198 46.0089 34.9675 48.2824C35.3022 49.4126 35.6761 50.5385 36.1455 51.6644C36.3846 52.2251 36.6411 52.7859 36.9845 53.351L37.254 53.7727C37.3497 53.9118 37.4888 54.0596 37.6105 54.203L37.7018 54.3074L37.7496 54.3595L37.7713 54.3856L37.7844 54.3987L37.8452 54.4508L38.0148 54.5899C38.1365 54.6899 38.2017 54.7682 38.3799 54.8812L38.8581 55.1942C39.0146 55.2855 39.1667 55.3507 39.3232 55.4289C39.6275 55.5941 39.9579 55.6854 40.2796 55.8071C40.9403 55.9853 41.6272 56.1201 42.3314 56.0897C43.7398 56.107 45.2091 55.4767 46.235 54.4639C47.2783 53.451 47.8652 52.1686 48.2303 50.921L48.465 50.0255L48.6737 49.1779L49.091 47.4869L50.0561 44.2223L51.1124 40.9315C51.4645 39.8361 51.8557 38.745 52.2252 37.6495L53.3685 34.3762C54.1379 32.194 54.9378 30.0161 55.742 27.8557L55.7898 27.734C56.381 26.382 56.794 25.0997 57.1461 23.739C57.5112 22.3089 57.7677 20.8483 57.9155 19.3746C58.0763 17.901 58.0894 16.4099 58.0024 14.9189L58.0198 14.8928ZM54.4335 19.0355C54.3292 20.331 54.1336 21.6307 53.838 22.9044C53.5467 24.1607 53.1511 25.4691 52.6817 26.5733L52.6338 26.682L52.6252 26.7081C51.8775 28.9294 51.1472 31.1377 50.4429 33.359L49.3953 36.6975C49.0606 37.8147 48.7041 38.9232 48.3825 40.0534L47.4131 43.4311C47.1175 44.5831 46.8001 45.7394 46.5176 46.887L45.796 50.2385C45.5612 51.221 45.1743 52.1339 44.5701 52.7772C43.9702 53.4162 43.179 53.8379 42.2531 53.877C41.7967 53.9292 41.3272 53.8553 40.8621 53.7553C40.423 53.6336 39.9101 53.438 39.6058 53.238C39.5275 53.2163 39.3841 53.0815 39.2798 53.0033L39.132 52.8946V52.8859L39.1015 52.8598L39.0494 52.8033C38.9798 52.725 38.9059 52.6685 38.8364 52.5773L38.6234 52.273C38.3408 51.86 38.0843 51.3688 37.8452 50.8776C37.3671 49.8777 36.9628 48.8127 36.5716 47.739C35.8021 45.5829 35.1414 43.3702 34.5806 41.1359C34.4415 40.5751 34.3111 40.0317 34.1937 39.4622C34.0894 38.9319 33.9459 38.232 33.6243 37.6626C33.3113 37.0757 32.7809 36.5497 32.1419 36.302C31.5203 36.0716 30.89 36.0368 30.251 36.1759C29.5033 36.102 28.6817 36.2976 28.047 36.7497C27.4037 37.2105 26.9298 37.8321 26.5603 38.4755C25.8387 39.7839 25.4605 41.1837 25.1519 42.5747C24.852 43.9614 24.665 45.3786 24.4564 46.7305L24.3694 47.213C24.3564 47.2782 24.3347 47.3869 24.326 47.4086L24.3129 47.4608L24.2695 47.5825L24.0738 47.9998L23.8521 48.4389C23.5522 49.0083 23.2044 49.5474 22.8175 49.9212C22.4133 50.3081 22.0786 50.4255 21.783 50.3559C21.4569 50.2994 21.0092 49.9299 20.6658 49.5691C20.5614 49.4517 20.4528 49.2996 20.3484 49.1648L20.1876 48.9562L20.1093 48.8518L20.0702 48.7997L20.0876 48.8171L20.0702 48.7953L19.5616 47.952L19.053 47.113L18.6314 46.2132C17.5098 43.8136 16.823 41.1837 16.197 38.4972L15.2624 34.411C15.1407 33.8894 15.0103 33.3764 14.8842 32.8548C25.3301 36.4411 36.615 27.8991 39.0407 25.9125C39.458 26.8559 40.2491 27.6774 41.7011 27.9948C41.7011 27.9948 39.3015 26.0517 38.8624 21.7046C38.8624 21.7046 38.2495 23.9433 38.9842 25.7821C27.9383 31.3681 19.8746 31.4898 14.1409 29.5336L13.8844 28.3773L13.4932 26.3299L12.6977 22.2219C12.1543 19.5137 11.6544 16.8533 11.6152 14.2625C11.5674 11.6717 11.9934 9.21124 13.3062 7.35506C13.8974 6.52912 14.7103 5.94662 15.7058 5.59886C16.7013 5.2424 17.875 5.1685 19.053 5.27283C20.2354 5.38151 21.4352 5.68145 22.5654 6.1292C22.8306 6.25091 23.0523 6.32916 23.3566 6.48131L24.2651 6.94209C24.9476 7.28985 25.6301 7.64196 26.3821 7.90279C27.8514 8.4679 29.512 8.8374 31.2291 8.75915C32.9418 8.6896 34.5676 8.15926 35.9456 7.54198C37.3366 6.9247 38.5495 6.24657 39.7275 5.71188L40.6013 5.33369L41.4055 5.02505L42.4053 4.7251L42.4661 4.70772L42.5618 4.69033L42.7748 4.64686L43.2051 4.55992C45.496 4.13391 47.8956 4.54688 49.7996 5.79447C50.7603 6.40741 51.5819 7.23334 52.2383 8.19838C52.886 9.14169 53.4337 10.298 53.7467 11.3543L53.8162 11.5586L53.8727 11.8151L53.9945 12.3237L54.1118 12.8323L54.1379 12.941L54.1466 13.0019L54.1814 13.2409L54.3292 14.1929C54.3727 14.5103 54.39 14.832 54.4205 15.1536C54.5292 16.4404 54.5422 17.7401 54.4292 19.0399L54.4335 19.0355Z"
              fill="#F58220"
            />
            <path
              d="M35.1544 20.5701C35.1544 20.5701 38.8798 11.7196 46.335 19.6398C46.335 19.6398 41.6793 15.4493 35.1544 20.5701Z"
              fill="#F58220"
            />
            <path
              d="M73.304 10.6328C74.1864 10.6328 75.2254 10.7937 76.4165 11.124C77.5119 11.4327 78.2726 11.737 78.69 12.0456L77.6249 16.0492C76.1861 15.0494 74.4255 14.5408 72.352 14.5234C71.8521 14.506 71.3348 14.6669 70.7957 15.0146C70.1437 15.4189 69.7481 15.9579 69.6133 16.6274C69.4221 17.5707 70.0481 18.4444 71.4869 19.2486C73.1388 20.1919 74.2821 21.044 74.9124 21.8134C75.8513 22.9262 76.2643 24.3086 76.1513 25.9605C76.0339 27.8818 75.1167 29.5685 73.3866 31.0291C72.0042 32.2028 70.2393 32.7896 68.0875 32.7896C66.9138 32.7896 65.7141 32.5853 64.4882 32.1854C63.9274 32.0333 63.1406 31.7724 62.1234 31.4073L63.1884 27.3732C64.8012 28.2557 66.4791 28.6991 68.2266 28.6991C69.1656 28.6991 69.9655 28.5078 70.6219 28.1209C71.4087 27.6428 71.7999 26.969 71.7999 26.0996C71.7999 24.8693 71.187 23.9043 69.9568 23.2131L67.7093 21.9134C67.192 21.6047 66.8443 21.3656 66.6748 21.1918C65.7923 20.2311 65.3489 19.2399 65.3489 18.2184C65.3489 17.8532 65.3967 17.449 65.4924 17.0056C66.1444 16.9491 66.7965 16.6578 67.4485 16.1405C68.0615 15.6797 68.544 15.1407 68.8874 14.5234C68.1397 15.4276 66.8486 15.8797 65.0272 15.8797C64.6447 15.8797 64.2491 15.8623 63.8448 15.8232L64.5621 13.115H65.5445C66.6574 13.115 67.5398 12.8759 68.1962 12.3934C69.7525 11.224 71.4521 10.6372 73.2953 10.6372L73.304 10.6328Z"
              fill="#F58220"
            />
            <path
              d="M95.804 34.6591C96.3256 34.6765 96.7386 34.5026 97.0429 34.1418L97.9079 36.7065C97.0038 37.6672 95.704 38.1845 94.0173 38.2628C92.9045 38.2628 91.9916 37.8672 91.2787 37.0804C90.6658 36.4283 90.3484 35.7371 90.3311 35.0068C90.3311 35.1633 90.418 34.3548 90.6006 32.5899L92.9914 23.3698C93.0219 23.2742 93.0349 23.1742 93.0349 23.0829C93.0349 22.7569 92.8784 22.5048 92.5741 22.3309C92.4394 22.2135 92.2829 22.157 92.109 22.157C91.7612 22.157 91.383 22.3222 90.9744 22.6439C90.3745 23.1221 90.0659 23.3698 90.0485 23.3916C89.7572 23.6611 89.5269 23.9741 89.3486 24.3392L87.2099 32.5855H83.215L85.6363 23.5133C85.6537 23.4176 85.6667 23.322 85.6667 23.2264C85.6667 22.9004 85.5102 22.6482 85.2059 22.4787C85.0885 22.3613 84.9364 22.3048 84.7451 22.3048C84.4191 22.3048 84.0452 22.47 83.6236 22.796C82.9281 23.3524 82.5194 23.7176 82.3847 23.8915C82.0369 24.3349 81.7935 24.9869 81.637 25.8476H81.6109L79.8069 32.5899H75.8467L79.42 18.9924H83.3802L83.1063 20.0574C84.2409 19.3488 85.3363 18.9924 86.3883 18.9924C86.7752 18.9924 87.0882 19.0402 87.3403 19.1358C88.2227 19.5271 88.8574 20.0922 89.24 20.8355C90.7571 19.5271 92.2655 18.875 93.7609 18.875C94.126 18.875 94.4434 18.9228 94.7129 19.0185C96.2908 19.7096 97.0777 20.8833 97.0777 22.5352C97.0777 22.8438 97.0472 23.1221 96.9907 23.3698L94.5694 32.5899C94.5477 33.4158 94.6737 33.9809 94.9433 34.2896C95.1171 34.4982 95.404 34.6243 95.8083 34.6634L95.804 34.6591Z"
              fill="#F58220"
            />
            <path
              d="M104.129 18.9315L100.56 32.6116H96.5737L100.143 18.9315H104.129ZM103.207 16.7102C102.555 16.7276 101.999 16.5798 101.538 16.2624C101.077 15.9451 100.847 15.5495 100.847 15.067C100.847 14.5845 101.077 14.1715 101.538 13.8151C101.999 13.4586 102.56 13.2717 103.207 13.2543C103.859 13.2369 104.416 13.3847 104.876 13.702C105.337 14.0194 105.572 14.4193 105.572 14.8975C105.572 15.3757 105.342 15.7973 104.876 16.1538C104.416 16.5102 103.859 16.6972 103.207 16.7145V16.7102Z"
              fill="#F58220"
            />
            <path
              d="M107.124 32.6114H103.164L108.519 12.1021H112.51L107.124 32.6114Z"
              fill="#F58220"
            />
            <path
              d="M114.097 28.0341C114.231 28.86 114.51 29.3686 114.931 29.5599C115.049 29.6381 115.192 29.7164 115.366 29.7903C116.748 29.812 117.948 29.2904 118.965 28.2384L117.957 32.1247C117.148 32.6463 116.287 32.9071 115.366 32.9071C114.557 32.9071 113.753 32.7072 112.945 32.3029C111.18 31.4378 110.297 29.7859 110.297 27.3473C110.297 26.0431 110.606 24.7564 111.219 23.4871C111.893 22.1047 112.823 20.9962 114.014 20.1616C115.205 19.327 116.405 18.9097 117.618 18.9097C118.287 18.9097 118.913 19.0444 119.487 19.3139C121.004 19.8312 121.765 20.9832 121.765 22.7698C121.765 23.0959 121.734 23.3958 121.678 23.661C121.408 24.8695 120.678 25.9345 119.487 26.856C118.296 27.7776 117 28.2384 115.601 28.2384C115.083 28.2384 114.583 28.1688 114.105 28.0384L114.097 28.0341ZM114.327 25.5259C114.692 25.5998 115.057 25.6389 115.422 25.6389C116.383 25.6389 117.17 25.4085 117.787 24.9477C118.417 24.3913 118.739 23.8349 118.739 23.2784C118.739 22.9698 118.622 22.6742 118.391 22.3873C118.161 22.1004 117.892 21.9569 117.583 21.9569C116.909 21.9569 116.227 22.396 115.54 23.2784C114.966 24.0087 114.562 24.7564 114.331 25.5259H114.327Z"
              fill="#F58220"
            />
            <path
              d="M130.156 24.5126V25.7211H126.526V27.9859H129.386V29.1553H126.526V31.4636H130.156V32.6807H125V24.5083H130.156V24.5126Z"
              fill="#231F20"
            />
            <path
              d="M135.855 25.9998C135.811 26.078 135.763 26.1345 135.711 26.1693C135.659 26.2041 135.598 26.2215 135.524 26.2215C135.446 26.2215 135.359 26.191 135.263 26.1345C135.172 26.078 135.063 26.0128 134.937 25.9389C134.807 25.865 134.659 25.8041 134.49 25.7433C134.32 25.6868 134.116 25.6563 133.881 25.6563C133.668 25.6563 133.485 25.6824 133.325 25.7302C133.168 25.7824 133.038 25.852 132.929 25.9432C132.825 26.0345 132.742 26.1432 132.69 26.2693C132.638 26.3953 132.612 26.5344 132.612 26.6822C132.612 26.8735 132.668 27.0343 132.773 27.1604C132.881 27.2908 133.025 27.3995 133.199 27.4908C133.377 27.5821 133.577 27.6647 133.803 27.7342C134.029 27.8038 134.259 27.8777 134.498 27.9603C134.733 28.0429 134.968 28.1385 135.194 28.2428C135.42 28.3515 135.624 28.4863 135.802 28.6514C135.981 28.8166 136.12 29.0166 136.228 29.2513C136.333 29.4904 136.389 29.7773 136.389 30.1164C136.389 30.4859 136.328 30.8293 136.202 31.151C136.076 31.4727 135.894 31.7552 135.646 31.9943C135.402 32.2334 135.107 32.4203 134.755 32.5594C134.403 32.6985 134.003 32.7637 133.551 32.7637C133.29 32.7637 133.033 32.7377 132.786 32.6898C132.529 32.6377 132.29 32.5681 132.06 32.4725C131.829 32.3812 131.612 32.2638 131.408 32.1334C131.203 32.003 131.025 31.8552 130.864 31.6944L131.312 30.9641C131.351 30.9119 131.399 30.8684 131.46 30.8293C131.521 30.7945 131.581 30.7771 131.651 30.7771C131.747 30.7771 131.851 30.8163 131.96 30.8945C132.068 30.9728 132.199 31.0597 132.351 31.151C132.503 31.2466 132.677 31.3292 132.881 31.4075C133.081 31.4857 133.325 31.5248 133.607 31.5248C134.042 31.5248 134.377 31.4249 134.616 31.2162C134.85 31.0075 134.972 30.7163 134.972 30.3294C134.972 30.1164 134.92 29.9382 134.811 29.8034C134.707 29.6687 134.559 29.5556 134.385 29.46C134.207 29.3687 134.007 29.2905 133.781 29.2253C133.555 29.16 133.325 29.0905 133.094 29.0166C132.859 28.9383 132.629 28.8514 132.403 28.7471C132.177 28.6428 131.977 28.5036 131.799 28.3341C131.621 28.1646 131.477 27.9516 131.373 27.6994C131.264 27.4473 131.212 27.13 131.212 26.7561C131.212 26.4605 131.268 26.1693 131.39 25.8867C131.512 25.6042 131.681 25.3564 131.907 25.1347C132.134 24.9173 132.412 24.7391 132.742 24.6087C133.072 24.4783 133.455 24.4131 133.885 24.4131C134.368 24.4131 134.816 24.487 135.22 24.6391C135.629 24.7869 135.972 24.9999 136.259 25.2738L135.881 25.9911L135.855 25.9998Z"
              fill="#231F20"
            />
            <path
              d="M142.053 25.9998C142.01 26.078 141.962 26.1345 141.91 26.1693C141.862 26.2041 141.797 26.2215 141.723 26.2215C141.645 26.2215 141.558 26.191 141.467 26.1345C141.375 26.078 141.262 26.0128 141.136 25.9389C141.01 25.865 140.858 25.8041 140.688 25.7433C140.515 25.6868 140.315 25.6563 140.08 25.6563C139.871 25.6563 139.684 25.6824 139.528 25.7302C139.371 25.7824 139.237 25.852 139.128 25.9432C139.019 26.0345 138.937 26.1432 138.889 26.2693C138.837 26.3953 138.806 26.5344 138.806 26.6822C138.806 26.8735 138.863 27.0343 138.967 27.1604C139.076 27.2908 139.219 27.3995 139.393 27.4908C139.571 27.5821 139.771 27.6647 139.997 27.7342C140.223 27.8038 140.454 27.8777 140.693 27.9603C140.928 28.0429 141.162 28.1385 141.388 28.2428C141.614 28.3515 141.814 28.4863 141.993 28.6514C142.171 28.8166 142.31 29.0166 142.419 29.2513C142.527 29.4904 142.579 29.7773 142.579 30.1164C142.579 30.4859 142.519 30.8293 142.388 31.151C142.262 31.4727 142.075 31.7552 141.836 31.9943C141.593 32.2334 141.297 32.4203 140.945 32.5594C140.597 32.6985 140.193 32.7637 139.741 32.7637C139.48 32.7637 139.224 32.7377 138.971 32.6898C138.715 32.6377 138.476 32.5681 138.245 32.4725C138.015 32.3812 137.798 32.2638 137.593 32.1334C137.389 32.003 137.206 31.8552 137.05 31.6944L137.498 30.9641C137.533 30.9119 137.58 30.8684 137.646 30.8293C137.702 30.7945 137.767 30.7771 137.837 30.7771C137.928 30.7771 138.032 30.8163 138.141 30.8945C138.25 30.9728 138.38 31.0597 138.532 31.151C138.684 31.2466 138.858 31.3292 139.058 31.4075C139.263 31.4857 139.502 31.5248 139.784 31.5248C140.215 31.5248 140.549 31.4249 140.788 31.2162C141.028 31.0075 141.145 30.7163 141.145 30.3294C141.145 30.1164 141.093 29.9382 140.984 29.8034C140.875 29.6687 140.732 29.5556 140.558 29.46C140.384 29.3687 140.18 29.2905 139.954 29.2253C139.728 29.16 139.502 29.0905 139.263 29.0166C139.028 28.9383 138.797 28.8514 138.576 28.7471C138.35 28.6428 138.15 28.5036 137.972 28.3341C137.793 28.1646 137.65 27.9516 137.546 27.6994C137.441 27.4473 137.385 27.13 137.385 26.7561C137.385 26.4605 137.446 26.1693 137.563 25.8867C137.685 25.6042 137.854 25.3564 138.08 25.1347C138.306 24.9173 138.584 24.7391 138.919 24.6087C139.25 24.4783 139.632 24.4131 140.062 24.4131C140.545 24.4131 140.988 24.487 141.397 24.6391C141.806 24.7869 142.149 24.9999 142.436 25.2738L142.058 25.9911L142.053 25.9998Z"
              fill="#231F20"
            />
            <path
              d="M149.057 24.5131V25.7216H145.427V27.9864H148.287V29.1558H145.427V31.464H149.057V32.6812H143.901V24.5088H149.057V24.5131Z"
              fill="#231F20"
            />
            <path
              d="M151.365 24.5219C151.413 24.5262 151.456 24.5393 151.491 24.5567C151.526 24.574 151.56 24.6001 151.595 24.6306C151.63 24.661 151.665 24.7045 151.708 24.7566L155.99 30.2252C155.977 30.0948 155.968 29.96 155.964 29.8383C155.955 29.7079 155.951 29.5905 155.951 29.4818V24.5132H157.29V32.6856H156.512C156.39 32.6856 156.29 32.6639 156.207 32.6291C156.129 32.59 156.051 32.5204 155.977 32.4291L151.708 26.9866C151.721 27.1084 151.73 27.2257 151.734 27.3474C151.739 27.4648 151.743 27.5735 151.743 27.6735V32.69H150.404V24.5175H151.2C151.265 24.5175 151.321 24.5175 151.365 24.5262V24.5219Z"
              fill="#231F20"
            />
            <path
              d="M164.819 24.5132V25.7651H162.354V32.6856H160.833V25.7651H158.368V24.5132H164.815H164.819Z"
              fill="#231F20"
            />
            <path
              d="M167.414 32.6856H165.888V24.5132H167.414V32.6856Z"
              fill="#231F20"
            />
            <path
              d="M176.243 32.6856H175.065C174.93 32.6856 174.826 32.6508 174.743 32.5856C174.661 32.5204 174.6 32.4378 174.556 32.3378L173.943 30.6729H170.557L169.948 32.3378C169.918 32.4248 169.861 32.503 169.774 32.5769C169.688 32.6465 169.579 32.6856 169.453 32.6856H168.262L171.479 24.5132H173.026L176.239 32.6856H176.243ZM170.953 29.5992H173.556L172.561 26.8823C172.513 26.7606 172.461 26.6215 172.409 26.4563C172.357 26.2911 172.304 26.1129 172.252 25.9216C172.2 26.1129 172.148 26.2911 172.096 26.4607C172.044 26.6258 171.996 26.7693 171.944 26.8954L170.948 29.5992H170.953Z"
              fill="#231F20"
            />
            <path
              d="M178.612 31.4293H181.877V32.6856H177.091V24.5132H178.608V31.4293H178.612Z"
              fill="#231F20"
            />
            <path
              d="M187.315 25.9998C187.271 26.078 187.223 26.1345 187.171 26.1693C187.119 26.2041 187.058 26.2215 186.98 26.2215C186.902 26.2215 186.815 26.191 186.724 26.1345C186.632 26.078 186.519 26.0128 186.393 25.9389C186.263 25.865 186.115 25.8041 185.945 25.7433C185.776 25.6868 185.572 25.6563 185.337 25.6563C185.124 25.6563 184.941 25.6824 184.78 25.7302C184.624 25.7824 184.489 25.852 184.381 25.9432C184.272 26.0345 184.194 26.1432 184.141 26.2693C184.089 26.3953 184.063 26.5344 184.063 26.6822C184.063 26.8735 184.12 27.0343 184.224 27.1604C184.333 27.2908 184.472 27.3995 184.65 27.4908C184.828 27.5821 185.028 27.6647 185.254 27.7342C185.48 27.8038 185.711 27.8777 185.95 27.9603C186.185 28.0429 186.419 28.1385 186.645 28.2428C186.871 28.3515 187.071 28.4863 187.25 28.6514C187.428 28.8166 187.571 29.0166 187.676 29.2513C187.784 29.4904 187.836 29.7773 187.836 30.1164C187.836 30.4859 187.771 30.8293 187.645 31.151C187.519 31.4727 187.336 31.7552 187.093 31.9943C186.85 32.2334 186.554 32.4203 186.202 32.5594C185.85 32.6985 185.45 32.7637 184.998 32.7637C184.737 32.7637 184.48 32.7377 184.228 32.6898C183.976 32.6377 183.733 32.5681 183.502 32.4725C183.272 32.3812 183.05 32.2638 182.85 32.1334C182.646 32.003 182.463 31.8552 182.307 31.6944L182.755 30.9641C182.789 30.9119 182.842 30.8684 182.903 30.8293C182.959 30.7945 183.029 30.7771 183.094 30.7771C183.189 30.7771 183.289 30.8163 183.398 30.8945C183.507 30.9728 183.637 31.0597 183.789 31.151C183.937 31.2466 184.115 31.3292 184.315 31.4075C184.52 31.4857 184.759 31.5248 185.041 31.5248C185.472 31.5248 185.811 31.4249 186.045 31.2162C186.28 31.0075 186.402 30.7163 186.402 30.3294C186.402 30.1164 186.35 29.9382 186.245 29.8034C186.137 29.6687 185.993 29.5556 185.819 29.46C185.641 29.3687 185.441 29.2905 185.215 29.2253C184.989 29.16 184.759 29.0905 184.524 29.0166C184.294 28.9383 184.059 28.8514 183.837 28.7471C183.611 28.6428 183.411 28.5036 183.233 28.3341C183.055 28.1646 182.916 27.9516 182.807 27.6994C182.703 27.4473 182.646 27.13 182.646 26.7561C182.646 26.4605 182.707 26.1693 182.824 25.8867C182.942 25.6042 183.111 25.3564 183.337 25.1347C183.563 24.9173 183.841 24.7391 184.176 24.6087C184.507 24.4783 184.885 24.4131 185.319 24.4131C185.802 24.4131 186.245 24.487 186.654 24.6391C187.058 24.7869 187.406 24.9999 187.693 25.2738L187.315 25.9911V25.9998Z"
              fill="#231F20"
            />
            <path
              d="M70.0418 45.7788V46.4134C70.0418 47.1003 70.0157 47.6958 69.9635 48.2088C69.9114 48.7174 69.7896 49.2216 69.5984 49.7172C69.4114 50.2127 69.1289 50.6475 68.7507 51.0256C67.9552 51.8211 66.8597 52.2211 65.4643 52.2211H60.9999V39.519H65.4643C66.8597 39.519 67.9552 39.9146 68.7507 40.7101C69.1289 41.0883 69.4114 41.51 69.5984 41.9838C69.7896 42.4533 69.907 42.9315 69.9635 43.4183C70.0157 43.9052 70.0418 44.479 70.0418 45.1354V45.7788ZM68.116 45.7788C68.116 45.0485 68.103 44.4834 68.0813 44.0878C68.0595 43.6922 67.9987 43.3183 67.8943 42.9706C67.7944 42.6228 67.6422 42.3359 67.4379 42.1099C66.9163 41.5361 66.1946 41.2492 65.2774 41.2492H62.9431V50.4823H65.2774C66.199 50.4823 66.9206 50.1997 67.4379 49.6302C67.7378 49.2999 67.9291 48.8521 68.003 48.2827C68.0769 47.7132 68.116 46.8829 68.116 45.7831V45.7788Z"
              fill="#231F20"
            />
            <path
              d="M81.0094 52.2167H72.8848V39.5146H81.0094V41.2491H74.8235V44.9528H80.1008V46.6699H74.8235V50.4866H81.0094V52.221V52.2167Z"
              fill="#231F20"
            />
            <path
              d="M93.2158 52.2167H91.4466L85.5824 43.2792V52.2167H83.6393V39.5146H85.4172L91.2901 48.4348V39.5146H93.2158V52.2167Z"
              fill="#231F20"
            />
            <path
              d="M104.327 41.2491H100.836V52.2167H98.9104V41.2491H95.4111V39.5146H104.331V41.2491H104.327Z"
              fill="#231F20"
            />
            <path
              d="M115.877 52.2167H113.821L112.951 49.665H107.935L107.065 52.2167H105.009L109.665 39.5146H111.217L115.873 52.2167H115.877ZM112.412 48.0218L110.491 42.388L108.513 48.0218H112.412Z"
              fill="#231F20"
            />
            <path
              d="M125.723 52.2167H117.668V39.5146H119.611V50.4822H125.727V52.2167H125.723Z"
              fill="#231F20"
            />
            <path
              d="M140.842 48.4085C140.738 49.0388 140.551 49.5996 140.281 50.0864C140.012 50.5776 139.681 50.9863 139.29 51.3166C138.899 51.647 138.451 51.8948 137.942 52.06C137.434 52.2295 136.895 52.3121 136.321 52.3121C135.878 52.3121 135.46 52.2599 135.069 52.16C134.678 52.0556 134.3 51.9035 133.943 51.6948C133.582 51.4862 133.265 51.2427 132.982 50.9645C132.587 50.5559 132.304 50.1255 132.13 49.6648C131.957 49.204 131.848 48.7084 131.809 48.1737C131.77 47.639 131.748 46.8653 131.748 45.8611C131.748 45.0917 131.757 44.4788 131.778 44.0223C131.8 43.5702 131.844 43.1529 131.917 42.7747C131.987 42.3965 132.109 42.0444 132.274 41.714C132.439 41.388 132.674 41.0663 132.982 40.7533C133.426 40.3143 133.926 39.9752 134.491 39.7492C135.056 39.5188 135.665 39.4058 136.321 39.4058C137.508 39.4058 138.508 39.7405 139.312 40.4186C140.116 41.0924 140.629 42.0575 140.846 43.3137H138.881C138.729 42.6486 138.434 42.1183 137.995 41.7271C137.556 41.3358 136.995 41.1402 136.321 41.1402C135.947 41.1402 135.599 41.2054 135.269 41.3402C134.939 41.4749 134.66 41.6619 134.434 41.9053C134.265 42.0922 134.134 42.2792 134.043 42.4661C133.952 42.653 133.878 42.9051 133.817 43.2138C133.761 43.5224 133.721 43.8702 133.7 44.2614C133.678 44.6483 133.669 45.183 133.669 45.8611C133.669 46.5392 133.682 47.0652 133.7 47.4478C133.717 47.8347 133.761 48.1824 133.817 48.4954C133.878 48.8084 133.952 49.0562 134.043 49.2388C134.134 49.4213 134.265 49.6126 134.434 49.8169C134.66 50.056 134.939 50.2429 135.269 50.3777C135.595 50.5124 135.947 50.582 136.321 50.582C136.777 50.582 137.182 50.4907 137.529 50.3125C137.882 50.1342 138.168 49.8778 138.403 49.5474C138.634 49.217 138.799 48.8388 138.899 48.4085H140.846H140.842Z"
              fill="#231F20"
            />
            <path
              d="M151.453 52.2167H143.398V39.5146H145.341V50.4822H151.453V52.2167Z"
              fill="#231F20"
            />
            <path
              d="M155.583 52.2167H153.64V39.5146H155.583V52.2167Z"
              fill="#231F20"
            />
            <path
              d="M168.459 52.2167H166.689L160.825 43.2792V52.2167H158.882V39.5146H160.66L166.533 48.4348V39.5146H168.459V52.2167Z"
              fill="#231F20"
            />
            <path
              d="M173.71 52.2167H171.767V39.5146H173.71V52.2167Z"
              fill="#231F20"
            />
            <path
              d="M185.664 48.4085C185.56 49.0388 185.373 49.5996 185.103 50.0864C184.834 50.5776 184.504 50.9863 184.112 51.3166C183.721 51.647 183.269 51.8948 182.76 52.06C182.252 52.2295 181.708 52.3121 181.135 52.3121C180.691 52.3121 180.278 52.2599 179.883 52.16C179.491 52.0556 179.118 51.9035 178.757 51.6948C178.396 51.4862 178.079 51.2427 177.796 50.9645C177.4 50.5559 177.118 50.1255 176.944 49.6648C176.766 49.204 176.661 48.7084 176.622 48.1737C176.583 47.639 176.561 46.8653 176.561 45.8611C176.561 45.0917 176.57 44.4788 176.592 44.0223C176.614 43.5702 176.661 43.1529 176.731 42.7747C176.805 42.3965 176.922 42.0444 177.087 41.714C177.253 41.388 177.487 41.0663 177.796 40.7533C178.239 40.3143 178.739 39.9752 179.304 39.7492C179.865 39.5188 180.478 39.4058 181.13 39.4058C182.321 39.4058 183.317 39.7405 184.125 40.4186C184.93 41.0924 185.442 42.0575 185.664 43.3137H183.695C183.547 42.6486 183.247 42.1183 182.813 41.7271C182.373 41.3358 181.817 41.1402 181.135 41.1402C180.765 41.1402 180.413 41.2054 180.087 41.3402C179.757 41.4749 179.478 41.6619 179.252 41.9053C179.083 42.0922 178.957 42.2792 178.861 42.4661C178.77 42.653 178.692 42.9051 178.635 43.2138C178.579 43.5224 178.539 43.8702 178.518 44.2614C178.496 44.6483 178.487 45.183 178.487 45.8611C178.487 46.5392 178.5 47.0652 178.518 47.4478C178.539 47.8347 178.579 48.1824 178.635 48.4954C178.692 48.8084 178.77 49.0562 178.861 49.2388C178.952 49.4213 179.083 49.6126 179.252 49.8169C179.478 50.056 179.757 50.2429 180.087 50.3777C180.413 50.5124 180.765 50.582 181.135 50.582C181.595 50.582 182 50.4907 182.347 50.3125C182.695 50.1342 182.986 49.8778 183.217 49.5474C183.452 49.217 183.617 48.8388 183.712 48.4085H185.664Z"
              fill="#231F20"
            />
          </g>
          <defs>
            <clipPath id="clip0_407_690">
              <rect
                width="187.883"
                height="55.5638"
                fill="white"
                transform="translate(0 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="flex justify-between gap-5 pl-20 text-lg  my-auto">
      <li className={activeSection === 'home' ? 'text-[#f58220]  list-none' : ''}>
        <HashLink smooth to="#home">Home</HashLink>
      </li>
      <li className={activeSection === 'about' ? 'text-[#f58220] list-none' : ''}>
        <HashLink smooth to="#about">About Us</HashLink>
      </li>
      <li className={activeSection === 'services' ? 'text-[#f58220] list-none' : ''}>
        <HashLink smooth to="#services">Services</HashLink>
      </li>
      <li className={activeSection === 'gallery' ? 'text-[#f58220] list-none' : ''}>
        <HashLink smooth to="#gallery">Gallery</HashLink>
      </li>
      <li className={activeSection === 'promotions' ? 'text-[#f58220] list-none' : ''}>
        <HashLink smooth to="#promotions">Promotions</HashLink>
      </li>
      <li className={activeSection === 'blogs' ? 'text-[#f58220] list-none' : ''}>
        <HashLink smooth to="#blogs">Blogs</HashLink>
      </li>
      <li className={activeSection === 'contact' ? 'text-[#f58220] list-none' : ''}>
        <HashLink smooth to="#contact">Contact Us</HashLink>
      </li>
      </div>
      <div className="my-auto">
        <button className="text-lg  text-white bg-[#f58220] px-3 py-2 rounded-lg">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
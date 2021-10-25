import React from 'react';

const MenuItem = ({link="#",children=""}) =>{
  return(
    <li class="menu__list-item">
    <a class="menu__list-link" href={link}>{children}</a>
  </li>
  )
}

const PageTitle = ({children=""}) =>{
  return(
    <h3 class="title">{children}</h3>

  )
}

const InfoItem = ({content="",children=""}) =>{
  return(
    <li class="about__info-item">
    {content}
    <span>{children}</span>
  </li>
  )
}

const AboutText= ({firstP="",secondP=" "})=>{
return(
  
  <div class="about__text">
    <p>{firstP}</p>
    <p>{secondP}</p>
</div>
)
}



function App() {
  return (
   
  <header class="header">
  <nav class="menu">
   <button class="menu__btn">
     <span></span>
   </button>
 
   <ul class="menu__list">
      <MenuItem>1 сезон</MenuItem>
      <MenuItem>2 сезон</MenuItem>
      <MenuItem>3 сезон</MenuItem>
      <MenuItem>4 сезон</MenuItem>
      <MenuItem>5 сезон</MenuItem>
      <MenuItem>6 сезон</MenuItem>


    </ul>
  </nav>



  <section class="about section-page">
    <div class="container">
  <PageTitle>О сериале</PageTitle>  
  <div class="about__inner">
      <ul class="about__info">

      <InfoItem content="Жанр">Историческая драма</ InfoItem>

      <InfoItem content="Сезонов">6</ InfoItem>

      <InfoItem content="Длительность серии">45 минута</ InfoItem>

      <InfoItem content="На экранах">С 3 марта 2013 по сей день</ InfoItem>


      </ul>
<AboutText firstP={'Викинги» созданы по заказу канала американского канала History, однако работали над ним канадцы и ирландцы.'} secondP={' Сериал поражает масштабными сценами сражений, добротным и глубоким сценарием, а также максимальным вниманием к исторической эпохи. Авторы сериала потратили кучу времени и денег (бюджет первого сезона - $40 млн, дальше суммы возросли) на то, чтобы викинги и их современники выглядели в шоу так, какими они был в свое время – VIII – IX веках нашей эры. С другой стороны – отсутствие точных исторических фактов и (полу)легендарность многих событий позволили авторам сериала вольную трактовку многих событий.'}></AboutText>


    </div>
    </div>
  </section>

</header>


  );
}

export default App;


<div id="category" class="wrapper">
    <H1 class="category2">カテゴリ&minus;から探す</H1>
  </div>

<section id="center" class="wrapper">  
  <ul class="box1">
  
    <li class="box2">
      <a class="circle" href=""><img src="sample.png" alt="お仏壇"><button class="btn">お仏壇各種</button></a>
    </li>
    <li class="box2">
      <a class="circle" href=""><img src="sample.png" alt="造花おしきみ"><button class="btn">造花おしきみ</button></a>
    </li>
    <li class="box2">
      <a class="circle" href=""><img src="sample.png" alt="念珠関連 経本"><button class="btn">念珠関連・経本</button></a>
    </li>
    <li class="box2">
      <a class="circle" href=""><img src="sample.png" alt="仏具"><button class="btn">仏具(りんなど)</button></a>
    </li>
    <li class="box2">
      <a class="circle" href=""><img src="sample.png" alt="小物各種"><button class="btn">小物(グッズ)</button></a>
    </li>
    <li class="box2">
      <a class="circle" href=""><img src="sample.png" alt="その他１"><button class="btn">お線香各種</button></a>
    </li>
  </ul>
  </section>

<style type="text/css">
.circle img {vertical-align: top;}
</style>


/* カテゴリ― */

#center ul{
  display: flex;
  justify-content: center;
  align-items: center;
}
  

.box1{
  display: flex;
}

.box2{
  padding-left: 1%;
  margin-bottom: 10px;
}

.btn {
  display: block;
  width: 140px;
  padding: 14px 0 16px 0;
  font-size: 100%;
  text-indent: -2rem;
  position: relative;
  margin: 0 auto;
  color: #fff;
  background: #bdbdbd;
  transition: all 0.2s;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
}

.btn:hover {
  opacity: 0.7;
  background-color: rgb(34, 11, 0);
}

.btn:after {
  content: "";
  width: 8px;
  height: 8px;/* sub */
  /* ========================= *//* sub */
  /* ========================= */
  border-top: solid 1px #fdfdfd;
  border-right: solid 1px #ffffff;
  transform: rotate(45deg);
  position: absolute;
  top: 0;
  left: 4px;
  bottom: 0;
  margin-left: 110px;
  margin-top: 20px;
}

.btn::before {
  content: "";
  border: 1px solid;
  position: absolute;
  top: -0.1em;
  bottom: 0;
  left: 108px;
  margin: auto;
  display: block;
  width: 23px;
  height: 23px;
  border-radius: 50%;
}

/* メディアクエリ */

@media screen and (max-width: 768px) {

#center ul {
    flex-direction: column;
    display: grid;
    width: fit-content;
    column-gap: 1em;
    grid-template-columns: repeat(2, auto);
    margin: 0 auto;
  
  }
}

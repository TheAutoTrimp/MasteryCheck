setInterval(() => {
  let enoughWind = getNextNatureCost('Wind') < game.empowerments.Wind.tokens + game.empowerments.Ice.tokens * 0.8;
  let enoughPoison = getNextNatureCost('Poison') < game.empowerments.Poison.tokens;
  let alertVisible = document.getElementById('masteryAlert');
  if (!alertVisible && (enoughWind || enoughPoison)) {
    let alert = '<span id=&quot;masteryAlert&quot; class=&quot;alert badge&quot;>!</span>';
    document.getElementById('natureA').insertAdjacentHTML('afterbegin', alert);
  }
}, 1000 * 60)
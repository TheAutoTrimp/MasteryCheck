setInterval(() => {
  let convertRate = 0.1 * game.talents.nature.purchased ? (game.talents.nature2.purchased ? 8 : 6) : 5;
  
  let enoughWind = getNextNatureCost('Wind') < game.empowerments.Wind.tokens + game.empowerments.Ice.tokens * convertRate;
  let enoughPoison = getNextNatureCost('Poison') < game.empowerments.Poison.tokens;

  let alertVisible = document.getElementById('masteryAlert');
  
  if (!alertVisible && (enoughWind || enoughPoison)) {
    let alert = '<span id="masteryAlert" class="alert badge">!</span>';
    document.getElementById('natureA').insertAdjacentHTML('afterbegin', alert);
  }
}, 1000 * 60)

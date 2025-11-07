const speed = 100;
const checkSpeed = (spd) => {
  let pts = 0;
  let rem = spd - 70;
  if (rem <= 0) return 0;

  demerits = Math.floor(rem / 5);
  pts += demerits;
  return pts;
};
let cancel=checkSpeed(500);

if(cancel>=12){
    console.log(cancel+'Revoked');
}else{
    console.log(cancel);
}


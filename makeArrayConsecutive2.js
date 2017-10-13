function makeArrayConsecutive2(statues) {
  statues = statues.sort((a,b) => a-b);
  let count = 0;
  
  for(let i = 0; i < statues.length-1;i++) {
    const dist = statues[i+1]-statues[i];
    (dist > 1) ? count += dist-1 : '';
  }
  
  return count;
}

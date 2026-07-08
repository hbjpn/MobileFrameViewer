var GlobalConfig={
	"NSCRB":12,
	"NPRB":1,
	//"nSubCarrier":12*1,
	"nSymbol":14
};

class Grid {
	constructor(nsc, nsymb) {
	  this.nsc = nsc;
	  this.nsymb = nsymb;
	  this.grid = new Array(nsc);
	  for(let k = 0; k < nsc; ++k)
		this.grid[k] = new Array(nsymb).fill(0);
	}

	add(k, l){
		this.grid[k][l] += 1;
		return this.grid[k][l]-1; // return value before increment
	}
}

class Counter {
	constructor(offset) {
		this.m = {};
		this.cnt = offset;
	}
  
	  touch(k){
		  if(k in this.m){}
		  else {
			this.m[k] = this.cnt;
			this.cnt++;
		  }
		  return this.m[k];
	  }
}

function draw()
{
	GlobalConfig = JSON.parse(document.getElementById("config").value);
	CSIRSConfig = JSON.parse(document.getElementById("CSIRSConfig").value);
	DMRSConfig = JSON.parse(document.getElementById("DMRSConfig").value);

	clear3D();
	const nSubCarrier = GlobalConfig.NSCRB * GlobalConfig.NPRB;

	const grid = new Grid(nSubCarrier, GlobalConfig.nSymbol);
	const cntr = new Counter(1);

	for(let k=0;k<nSubCarrier;++k){
		for(let l=0;l<GlobalConfig.nSymbol;++l){
			drawRe3D("darkblue", k, l, grid.add(k,l), "("+k+","+l+")","white"); 
		}
	}

	const dmrs = getDMRSForPDSCH();
	
	console.log(dmrs);
	for(const port in dmrs){
		for(const e of dmrs[port]){
			const k = e[0];
			const l = e[1];
			drawRe3D("green", e[0], e[1], (true ? cntr.touch(port) : grid.add(k,l)), ""+port,"black");
		}
	}
	
	const csirs = getCSIRS();

	console.log(csirs);
	for(const port in csirs){
		for(const e of csirs[port]){
			const k = e[0];
			const l = e[1];
			drawRe3D("yellow", e[0], e[1], (true ? cntr.touch(port) : grid.add(k,l)), ""+port+","+e[2][0]+","+e[2][1],"black");
		}
	}
}

function init()
{
	let conf = document.getElementById("config");
	conf.value = JSON.stringify(GlobalConfig, null, 4);

	let csirfconf = document.getElementById("CSIRSConfig");
	csirfconf.value = JSON.stringify(CSIRSConfig, null, 4);

	let dmrsconf = document.getElementById("DMRSConfig");
	dmrsconf.value = JSON.stringify(DMRSConfig, null, 4);
}

window.addEventListener('load', function(){
	init();
});
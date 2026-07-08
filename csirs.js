// https://jp.mathworks.com/help/5g/ref/nrcsirsconfig.html
var CSIRSConfig={
	"density":1, // CSI-RS-ResourceMapping IE or the CSI-RSCellMobility IE. 
	"BetaCSIRS":1.0,
	/* Legend 
	"nrofPorts":32, // N
	"symbolLocations":[0,2], // firstOFDMSymbolInTimeDomain, firstOFDMSymbolInTimeDomain2 : Time domain 
	"subcarrierLocations":"101101", // frequencyDomainAllocation, size 2,3,6,12 bit string, for many cases 6 [b5,b4,...,b0]. "101001" => f(0)=0, f(1)=3, f(2)=5. f(i) is bit number(index) of i-th bit set to 1
	"cdm-Type":"fd-CDM2",
	*/

	/*
	"nrofPorts":32, // N
	"symbolLocations":[0,2], // firstOFDMSymbolInTimeDomain, firstOFDMSymbolInTimeDomain2
	"subcarrierLocations":"101101", // frequencyDomainAllocation, size 2,3,6,12 bit string, for many cases 6 [b5,b4,...,b0]. "101001" => f(0)=0, f(1)=3, f(2)=5. f(i) is bit number(index) of i-th bit set to 1
	"cdm-Type":"fd-CDM2",
	*/
	/*
	"nrofPorts":4, // N
	"symbolLocations":[0,2], // firstOFDMSymbolInTimeDomain, firstOFDMSymbolInTimeDomain2
	"subcarrierLocations":"101" // frequencyDomainAllocation, size 2,3,6,12 bit string, for many cases 6 [b5,b4,...,b0]. "101001" => f(0)=0, f(1)=3, f(2)=5. f(i) is bit number(index) of i-th bit set to 1
	*/
	/*
	"nrofPorts":8, // N
	"symbolLocations":[3], // firstOFDMSymbolInTimeDomain, firstOFDMSymbolInTimeDomain2
	"subcarrierLocations":"011110", // frequencyDomainAllocation, size 2,3,6,12 bit string, for many cases 6 [b5,b4,...,b0]. "101001" => f(0)=0, f(1)=3, f(2)=5. f(i) is bit number(index) of i-th bit set to 1
	"cdm-Type":"fd-CDM2",
	*/
	/*
	"nrofPorts":8, // N
	"symbolLocations":[3], // firstOFDMSymbolInTimeDomain, firstOFDMSymbolInTimeDomain2
	"subcarrierLocations":"000110", // frequencyDomainAllocation, size 2,3,6,12 bit string, for many cases 6 [b5,b4,...,b0]. "101001" => f(0)=0, f(1)=3, f(2)=5. f(i) is bit number(index) of i-th bit set to 1
	"cdm-Type":"cdm4-FD2-TD2",
	*/
	"nrofPorts":32, // N
	"symbolLocations":[3], // firstOFDMSymbolInTimeDomain, firstOFDMSymbolInTimeDomain2
	"subcarrierLocations":"110110", // frequencyDomainAllocation, size 2,3,6,12 bit string, for many cases 6 [b5,b4,...,b0]. "101001" => f(0)=0, f(1)=3, f(2)=5. f(i) is bit number(index) of i-th bit set to 1
	"cdm-Type":"cdm8-FD2-TD4",
};

function table741531(){
	// Some Useful Note : 
	//   CDM Group Size is Number of Ports divided by CDM Level. e.g. 32Ports, CDM2 has 16 CDM Group, CDM4 has 8, CDM8 has 4 etc...
	const cc=CSIRSConfig;
	const fi = [...cc.subcarrierLocations.split('').reverse().join('')].reduce((acc, bit, i, arr) => 
  		bit === '1' ? [...acc, i] : acc, []
	);

	if(cc.nrofPorts == 4){
		if(cc.density == 1){
			if(cc["cdm-Type"]=="fd-CDM2"){
				// Row#4 or 5
				const ki = [...fi].map(v=>v*4);
				const li = cc.symbolLocations;

				const ret={
					"row":4,
					"CDMGroup":[0,1],
					"kd":[0,1],
					"ld":[0],
					"kblb":[
						[ki[0],li[0]],
						[ki[0]+2,li[0]]
					]
				};

				return ret;
			}
		}
	}
	if(cc.nrofPorts == 8){
		if(cc.density == 1){
			if(cc["cdm-Type"]=="fd-CDM2"){
				// Row#6
				const ki = [...fi].map(v=>v*2);
				const li = cc.symbolLocations;

				const ret={
					"row":6,
					"CDMGroup":[0,1,2,3],
					"kd":[0,1],
					"ld":[0],
					"kblb":[
						[ki[0],li[0]],
						[ki[1],li[0]],
						[ki[2],li[0]],
						[ki[3],li[0]],
					]
				};

				return ret;
			}else if(cc["cdm-Type"]=="cdm4-FD2-TD2"){
				// Row#8
				const ki = [...fi].map(v=>v*2);
				const li = cc.symbolLocations;

				const ret={
					"row":8,
					"CDMGroup":[0,1],
					"kd":[0,1],
					"ld":[0,1],
					"kblb":[
						[ki[0],li[0]],
						[ki[1],li[0]],
					]
				};

				return ret;
			}
		}
	}
	else if(cc.nrofPorts == 32){
		if(cc.density == 1 || cc.density == 0.5){
			if(cc["cdm-Type"]=="fd-CDM2"){
				// Row#16
				const ki = [...fi].map(v=>v*2);
				const li = cc.symbolLocations;

				const ret={
					"row":16,
					"CDMGroup":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
					"kd":[0,1],
					"ld":[0],
					"kblb":[
						[ki[0],li[0]],
						[ki[1],li[0]],
						[ki[2],li[0]],
						[ki[3],li[0]],
						[ki[0],li[0]+1],
						[ki[1],li[0]+1],
						[ki[2],li[0]+1],
						[ki[3],li[0]+1],
						[ki[0],li[1]],
						[ki[1],li[1]],
						[ki[2],li[1]],
						[ki[3],li[1]],
						[ki[0],li[1]+1],
						[ki[1],li[1]+1],
						[ki[2],li[1]+1],
						[ki[3],li[1]+1]
					]
				};

				return ret;
			}else if(cc["cdm-Type"]=="cdm8-FD2-TD4"){
				// Row#18
				const ki = [...fi].map(v=>v*2);
				const li = cc.symbolLocations;

				const ret={
					"row":18,
					"CDMGroup":[0,1,2,3],
					"kd":[0,1],
					"ld":[0,1,2,3],
					"kblb":[
						[ki[0],li[0]],
						[ki[1],li[0]],
						[ki[2],li[0]],
						[ki[3],li[0]]
					]
				};

				return ret;
			}
		}
	}
}

function table741532_234()
{
	let ret;
	// 7.4.1.5.3.2-2,3,4
	if(CSIRSConfig["cdm-Type"]=="noCDM"){
		ret = [
			[ [1], [1] ]
		];
	}else if(CSIRSConfig["cdm-Type"]=="fd-CDM2"){
		ret = [
			[ [1,  1], [1] ],
			[ [1, -1], [1] ]
		] ;
	}else if(CSIRSConfig["cdm-Type"]=="cdm4-FD2-TD2"){
		ret = [
			[ [1, 1], [1,1] ],
			[ [1,-1], [1,1] ],
			[ [1, 1], [1,-1] ],
			[ [1,-1], [1,-1] ]
		];
	}else if(CSIRSConfig["cdm-Type"]=="cdm8-FD2-TD4"){
		ret = [
			[ [1, 1], [1, 1, 1, 1] ],
			[ [1,-1], [1, 1, 1, 1] ],
			[ [1, 1], [1,-1, 1,-1] ],
			[ [1,-1], [1,-1, 1,-1] ],
			[ [1, 1], [1, 1,-1,-1] ],
			[ [1,-1], [1, 1,-1,-1] ],
			[ [1, 1], [1,-1,-1, 1] ],
			[ [1,-1], [1,-1,-1, 1] ]
		];
	}
	return ret;
}

function getCSIRS()
{
	let csirs = {}; // port=>list of [k,l,value]
	const alpha = (CSIRSConfig.nrofPorts > 1 ? 2:1) * CSIRSConfig.density; 

	const tbl = table741531();

	const N = CSIRSConfig.nrofPorts; 
	const L = N / tbl.CDMGroup.length; // e.g. 32/16=2, 8/4=2 for CDM2, 

	const wfwt = table741532_234();

	for(let n = 0; n < GlobalConfig.NPRB; ++n){
		for(const [j,cdmj] of tbl.CDMGroup.entries()){
			const kbar = tbl.kblb[cdmj][0];
			const lbar = tbl.kblb[cdmj][1];
			for(const kd of tbl.kd){
				for(const ld of tbl.ld){

					k = n*GlobalConfig.NSCRB + kbar + kd;
					l = lbar + ld;
					const md = Math.floor(n*alpha) + kd + Math.floor(kbar*CSIRSConfig.density/GlobalConfig.NSCRB);

					console.log(kd, ld, k, l);

					for(const [s,wfwts] of wfwt.entries()){
						const ptild = s + L*j;
						const p = 3000 + ptild;				
						let r = (x)=>x; // If actual sequence is needed
						const wf = wfwts[0];
						const wt = wfwts[1];
						//a_klpmu = CSIRSConfig.BetaCSIRS * wf[kd] * wt[ld] * r(md);
						a_klpmu = wf[kd] * wt[ld];
						if(!(p in csirs)) csirs[p]=[];
						csirs[p].push([k,l,[wf[kd],wt[ld]]]);
					}
				}
			}
		}
	}
	return csirs;
}

var DMRSConfig = {
    "dciformat":10, // Not RRC param, but DCI format.
    "layers":4, // Not RRC param
    "dmrs-Type":1, // Configuration Type
    "PDSCHMappingType":"A",
    "dmrs-TypeA-Position":"pos3",
    "maxLength":1,
    "dmrs-AdditionalPosition":0  // pos0=0, pos1=1, ...
};

// Parameters for configuration type1
function table741121(port){
    const dmrsPorts = {
        1000: { cdmGroup: 0, delta: 0, wf: [ 1,  1,  1,  1], wt: [ 1,  1] },
        1001: { cdmGroup: 0, delta: 0, wf: [ 1, -1,  1, -1], wt: [ 1,  1] },
        1002: { cdmGroup: 1, delta: 1, wf: [ 1,  1,  1,  1], wt: [ 1,  1] },
        1003: { cdmGroup: 1, delta: 1, wf: [ 1, -1,  1, -1], wt: [ 1,  1] },
        1004: { cdmGroup: 0, delta: 0, wf: [ 1,  1,  1,  1], wt: [ 1, -1] },
        1005: { cdmGroup: 0, delta: 0, wf: [ 1, -1,  1, -1], wt: [ 1, -1] },
        1006: { cdmGroup: 1, delta: 1, wf: [ 1,  1,  1,  1], wt: [ 1, -1] },
        1007: { cdmGroup: 1, delta: 1, wf: [ 1, -1,  1, -1], wt: [ 1, -1] },
        1008: { cdmGroup: 0, delta: 0, wf: [ 1,  1, -1, -1], wt: [ 1,  1] },
        1009: { cdmGroup: 0, delta: 0, wf: [ 1, -1, -1,  1], wt: [ 1,  1] },
        1010: { cdmGroup: 1, delta: 1, wf: [ 1,  1, -1, -1], wt: [ 1,  1] },
        1011: { cdmGroup: 1, delta: 1, wf: [ 1, -1, -1,  1], wt: [ 1,  1] },
        1012: { cdmGroup: 0, delta: 0, wf: [ 1,  1, -1, -1], wt: [ 1, -1] },
        1013: { cdmGroup: 0, delta: 0, wf: [ 1, -1, -1,  1], wt: [ 1, -1] },
        1014: { cdmGroup: 1, delta: 1, wf: [ 1,  1, -1, -1], wt: [ 1, -1] },
        1015: { cdmGroup: 1, delta: 1, wf: [ 1, -1, -1,  1], wt: [ 1, -1] },
      };
    
    return dmrsPorts[port];
}

// For type2
function table741122(port){
    const dmrsPorts = {
        1000: { cdmGroup: 0, delta: 0, wf: [ 1,  1,  1,  1], wt: [ 1,  1] },
        1001: { cdmGroup: 0, delta: 0, wf: [ 1, -1,  1, -1], wt: [ 1,  1] },
        1002: { cdmGroup: 1, delta: 2, wf: [ 1,  1,  1,  1], wt: [ 1,  1] },
        1003: { cdmGroup: 1, delta: 2, wf: [ 1, -1,  1, -1], wt: [ 1,  1] },
        1004: { cdmGroup: 2, delta: 4, wf: [ 1,  1,  1,  1], wt: [ 1,  1] },
        1005: { cdmGroup: 2, delta: 4, wf: [ 1, -1,  1, -1], wt: [ 1,  1] },
      
        1006: { cdmGroup: 0, delta: 0, wf: [ 1,  1,  1,  1], wt: [ 1, -1] },
        1007: { cdmGroup: 0, delta: 0, wf: [ 1, -1,  1, -1], wt: [ 1, -1] },
        1008: { cdmGroup: 1, delta: 2, wf: [ 1,  1,  1,  1], wt: [ 1, -1] },
        1009: { cdmGroup: 1, delta: 2, wf: [ 1, -1,  1, -1], wt: [ 1, -1] },
        1010: { cdmGroup: 2, delta: 4, wf: [ 1,  1,  1,  1], wt: [ 1, -1] },
        1011: { cdmGroup: 2, delta: 4, wf: [ 1, -1,  1, -1], wt: [ 1, -1] },
      
        1012: { cdmGroup: 0, delta: 0, wf: [ 1,  1, -1, -1], wt: [ 1,  1] },
        1013: { cdmGroup: 0, delta: 0, wf: [ 1, -1, -1,  1], wt: [ 1,  1] },
        1014: { cdmGroup: 1, delta: 2, wf: [ 1,  1, -1, -1], wt: [ 1,  1] },
        1015: { cdmGroup: 1, delta: 2, wf: [ 1, -1, -1,  1], wt: [ 1,  1] },
        1016: { cdmGroup: 2, delta: 4, wf: [ 1,  1, -1, -1], wt: [ 1,  1] },
        1017: { cdmGroup: 2, delta: 4, wf: [ 1, -1, -1,  1], wt: [ 1,  1] },
      
        1018: { cdmGroup: 0, delta: 0, wf: [ 1,  1, -1, -1], wt: [ 1, -1] },
        1019: { cdmGroup: 0, delta: 0, wf: [ 1, -1, -1,  1], wt: [ 1, -1] },
        1020: { cdmGroup: 1, delta: 2, wf: [ 1,  1, -1, -1], wt: [ 1, -1] },
        1021: { cdmGroup: 1, delta: 2, wf: [ 1, -1, -1,  1], wt: [ 1, -1] },
        1022: { cdmGroup: 2, delta: 4, wf: [ 1,  1, -1, -1], wt: [ 1, -1] },
        1023: { cdmGroup: 2, delta: 4, wf: [ 1, -1, -1,  1], wt: [ 1, -1] },
      };

    return dmrsPorts[port];
}

// lb(lbar)(=pos0,1,2,3) for single DMRS
function table741123(lduration, l0, l1){
    const dmrsPositionsTypeA = {
        2:  [null, null, null, null],
        3:  [["l0"], ["l0"], ["l0"], ["l0"]],
        4:  [["l0"], ["l0"], ["l0"], ["l0"]],
        5:  [["l0"], ["l0"], ["l0"], ["l0"]],
        6:  [["l0"], ["l0"], ["l0"], ["l0"]],
        7:  [["l0"], ["l0"], ["l0"], ["l0"]],
        8:  [["l0"], ["l0", 7], ["l0", 7], ["l0", 7]],
        9:  [["l0"], ["l0", 7], ["l0", 7], ["l0", 7]],
       10:  [["l0"], ["l0", 9], ["l0", 6, 9], ["l0", 6, 9]],
       11:  [["l0"], ["l0", 9], ["l0", 6, 9], ["l0", 6, 9]],
       12:  [["l0"], ["l0", 9], ["l0", 6, 9], ["l0", 5, 8, 11]],
       13:  [["l0"], ["l0", "l1"], ["l0", 7, 11], ["l0", 5, 8, 11]],
       14:  [["l0"], ["l0", "l1"], ["l0", 7, 11], ["l0", 5, 8, 11]],
      };

      const dmrsPositionsTypeB = {
        2:  [["l0"], ["l0"], ["l0"], ["l0"]],
        3:  [["l0"], ["l0"], ["l0"], ["l0"]],
        4:  [["l0"], ["l0"], ["l0"], ["l0"]],
        5:  [["l0"], ["l0", 4], ["l0", 4], ["l0", 4]],
        6:  [["l0"], ["l0", 4], ["l0", 4], ["l0", 4]],
        7:  [["l0"], ["l0", 4], ["l0", 4], ["l0", 4]],
        8:  [["l0"], ["l0", 6], ["l0", 3, 6], ["l0", 3, 6]],
        9:  [["l0"], ["l0", 7], ["l0", 4, 7], ["l0", 4, 7]],
       10:  [["l0"], ["l0", 7], ["l0", 4, 7], ["l0", 4, 7]],
       11:  [["l0"], ["l0", 8], ["l0", 4, 8], ["l0", 3, 6, 9]],
       12:  [["l0"], ["l0", 9], ["l0", 5, 9], ["l0", 3, 6, 9]],
       13:  [["l0"], ["l0", 9], ["l0", 5, 9], ["l0", 3, 6, 9]],
       14:  [null, null, null, null], // Mapping Type Bでは使用不可
      };

      const row = DMRSConfig.PDSCHMappingType == "A" ? dmrsPositionsTypeA[lduration] : dmrsPositionsTypeB[lduration];
      if (!row || row[0] === null)
          return null;
  
      const replace = arr => {
          let r = arr.map(v => v === "l0" ? l0 : v);
          r = r.map(v => v === "l1" ? l1 : v);
          return r;
      };

      let lb = row[DMRSConfig["dmrs-AdditionalPosition"]];

      return replace(lb);
}

// format : 00, 01, 10, etc...
function getDMRSForPDSCH()
{
    //https://www.sharetechnote.com/html/WebProgramming/Websim_DmrsDl5G.html

    let configType = DMRSConfig["dmrs-Type"];
    let PDSCHmappingType = DMRSConfig.PDSCHMappingType;

    let lduration = 0 ;

    let l0 = 0;
    let l1 = 0;
    if(PDSCHmappingType == "A"){
        // l is relative to start of slot
        l0 = DMRSConfig["dmrs-TypeA-Position"] == "pos3" ? 3 : 2;
        l1 = 11; // Most case, some case l1=12. see 38.211
        lduration = 14; //  duration between the first OFDM symbol of the slot and the last OFDM symbol of the scheduled PDSCH resources in the slot  
    }else{
        // l is relative to scheduled PDSCH resource
        l0 = 0;
        l1 = 11; 
        lduration = 13; // duration of the scheduled PDSCH resources 
    }

    let lblist = table741123(lduration, l0, l1); // lbar. Could be multiple.
    let dmrs = {}; // port=>list of [k,l,value]

    let nsc = GlobalConfig.NSCRB * GlobalConfig.NPRB;

    let maxN = nsc/4 + 2; // e.g. 12 sc => n=3(configType=1) or n=2(configType=2) would be valid. The same for 24 sc => n=6 o n=4. configType=1 (4 sc interval) is safe assumption, so just divide num sc with 4, and plus 2(+1 for upper limit, additional +1 for safety).
    for(let n = 0; n < maxN; ++n){ // n is just a indicator to repeat DMRS for every 4 or 6 subcarriers. Just continue as long as it is within allocated PDSCH resources.
        for(let port = 1000; port < 1000 + DMRSConfig.layers; ++port){ // Not found aparent mapping of layer to 1000+v, but it seems this is correct.
            if(DMRSConfig.dciformat == 10){
                for(let kd = 0; kd < 2; ++kd){
                    let nTimeRE = 1; // Table 7.4.1.1.2-5. For single symbol DM-RS, ldash=0 (n=1), For double symbol DRMS, ldash = 0 and 1 ( n=2 )
                    for(let ldash = 0; ldash < nTimeRE; ++ldash) {
                        let k = 0;
                        if(configType == 1){
                            let delta = table741121(port).delta;
                            k = 4*n + 2*kd + delta;
                        }else{
                            let delta = table741122(port).delta;
                            k = 6*n + kd + delta;
                        }
                        if(k < 0 || k >= nsc) continue;

                        for(let lb of lblist){
                            l = lb + ldash; // ldash, not same as ld(lduration) in the spec

                            if(! (port in dmrs) ) dmrs[port]=[];

                            dmrs[port].push([k,l]);
                        }
                    }
                }
            }
        }
    }

    return dmrs;
}
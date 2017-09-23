//Action Inputs
//  cluster  -  VC:ClusterComputeResource
//
//Action Result: VC:HostSystem    

var hosts = cluster.host;
var host;
for (var h in hosts) {
    if (hosts[h].runtime.connectionState.value == "connected" && hosts[h].runtime.inMaintenanceMode == false) {
        host = hosts[h];
    } else {
        System.warn(hosts[h].name+": "+hosts[h].runtime.connectionState + ", inMaintenanceMode: " + hosts[h].runtime.inMaintenanceMode);
    }
}
return host;
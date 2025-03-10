import ShipmentTable from "./components/ShipmentsTable";
import ShipmentProgressCard from "./components/ShipmentProgressCard";

export default function Home() {
  return (
    <div>

      <div class="grid grid-cols-5 gap-4">
  <div class="col-span-4"> <ShipmentTable /></div>

  <div class="p-4">
  <div class="space-y-4">
  <span class="block"> <ShipmentProgressCard/></span>
  <span class="block"> <ShipmentProgressCard/></span>
  <span class="block"> <ShipmentProgressCard/></span>
</div>
  </div>
 
</div>

      
    </div>
  );
}

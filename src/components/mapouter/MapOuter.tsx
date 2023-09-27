const MapOuter = () => {
  return(
    <>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=121%20King%20St%2C%20Melbourne%20VIC%203000%2C%20Australia&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0}></iframe>
          <a href="https://sites.google.com/view/maps-api-v2/mapv2"></a>
        </div>
      </div>
    </>
  )
}
export default MapOuter;
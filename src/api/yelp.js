import axios from "axios";

export default axios.create({
  baseURL: `https://api.yelp.com/v3/businesses`,
  headers: {
    Authorization:
      "Bearer J0oQhlr3arKllsBqKyZ_Dzud03Ncnf4X-4I42pHWCjBGdiT-4N5zRZgTGeau_QiJrlv3XiXTERnMU0ypneY1zvRco_NN1L1cUG7KmqmmKM5cwMpr8qc7c0UeBaMWX3Yx",
  },
});

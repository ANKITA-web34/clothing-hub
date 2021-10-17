const INTIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl:
        "https://images.unsplash.com/photo-1572460737616-866a25d4d61a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGhhdHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "jackets",
      imageUrl:
        "https://images.unsplash.com/photo-1544022613-e87ca75a784a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amFja2V0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "sneakers",
      imageUrl:
        "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c25lYWtlcnN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "womens",
      imageUrl:
        "https://media.istockphoto.com/photos/young-woman-browsing-in-the-fashion-store-picture-id663982076?b=1&k=20&m=663982076&s=170667a&w=0&h=JXrzH0MgMWWo4Z-C4Ef2i7WuzBwU3MIZONf-INLYAfc=",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "mens",
      imageUrl:
        "https://media.istockphoto.com/photos/this-one-match-perfect-with-me-picture-id1293366109?b=1&k=20&m=1293366109&s=170667a&w=0&h=2z_h2WlM3291IRKFXrdmtObnCt93rNNdNN6mqvnKD1I=",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ],
};


const directoryReducer = (state = INTIAL_STATE, action) => {
    switch(action.type) {
        default: 
        return state;
    }
};

export default directoryReducer;
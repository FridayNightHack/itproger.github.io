const useShowCategory = ({ defaultValue, selectedValue }, response) => {
    const category = selectedValue;

    let Products = function (productCategory, categoryName) {
        (this.category = productCategory),
            (this.categoryName = categoryName),
            (this.showCategory = () => {
                const key = this.category;
                const categoryName = this.categoryName;
                const bigNode = document.getElementById('fetchProduct');

                for (let i = 0; i < key.length; i++) {
                    this.insertingForm(bigNode, categoryName, key[i]);
                }
            }),
            (this.insertingForm = (output, categoryName, HTMLitem) => {
                output.insertAdjacentHTML(
                    'afterbegin',
                    `
    <li class="content-cards-item">
      <div class="card">
        <div class="card__body">
          <div class="half">
            <div class="featured_text">
              <h3 aria-label="name">${HTMLitem.name}</h3>
              <p class="sub" aria-label="category">${categoryName}</p>
            </div>

            <div class="image" aria-label="img">
              <img src="${HTMLitem.img}" alt="${HTMLitem.name}">
            </div>
          </div>

          <div class="half">
            <ul class="description">
              <li class="desc-li" aria-label="info">
              AML-III Rectangular Duct Production Line is a piece of the very important equipment in duct production and is mainly used for blanking of air duct flat plates for HVAC duct manufacturers. Meanwhile, It can cut sheet metal for TDF flange work, and also can fold “口” shape for angle flange duct making. The functions mainly include leveling, beading, notching, cutting, and folding.
              </li>
              <li class="desc-li">Sheeting Thickness (mm)：0.5-1.5</li>
              <li class="desc-li">Max Working Speed (m/min)：16</li>
              <li class="desc-li">Max Weight Of Sending Coil (T)：7×2</li>
              <li class="desc-li">Total Power (KW)：10</li>
            </ul>
              <span class="stock"><i class="fa fa-pen"></i>In stock</span>

            <div class="reviews">
              <ul class="stars">
              <li><img src="./icons/star-icon.svg" width="14" height="14"></li>
              <li><img src="./icons/star-icon.svg" width="14" height="14"></li>
              <li><img src="./icons/star-icon.svg" width="14" height="14"></li>
              <li><img src="./icons/star-icon.svg" width="14" height="14"></li>
              <li><img src="./icons/star-icon.svg" width="14" height="14"></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="card__footer">
          <div class="recommend">
            <p class="p-text-size">Recommended by</p>
            <h3>Mason Machinery</h3>
          </div>
          <div class="action">
            <a href="./items.html">Inquiry</a>
          </div>
        </div>
      </div>
    </li>
  `,
                );
            });
    };

    let item = new Products(response[`${category}`], category);
    item.showCategory();
};

export default useShowCategory;

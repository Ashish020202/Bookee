import React from 'react'

function Cards ({item})  {
  console.log(item);
  
  return (
    <>
      <div>
      <div className="card bg-base-100 w-80 shadow-xl hover:scale-105 scroll-smooth dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.images}
      alt="Shoes" />
  </figure>
  <div className="card-body ">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
      </div>
    </>
  )
}

export default Cards
function App() {
  return (
    <>
      <div>App</div>
      <div>
        <h1 className="text-3xl font-bold ">Hello world!</h1>
      </div>
      <div className="fluid-container">
        <input className="name" placeholder="name" />
        <input className="pw" placeholder="password" />
        <button className="submit">Submit</button>
      </div>
      <div className="container">
        <div className="box bg-slate-600" id="box1">
          1
        </div>
        <div className="box" id="box2">
          2
        </div>
        <div className="box" id="box3">
          3
        </div>
        {/* <div className="box" id="box4">4</div>
        <div className="box" id="box5">5</div> */}
      </div>

      <div>
        <div className="min-h-[100px] rounded-lg shadow bg-orange-400"></div>
        <div className="min-h-[100px] rounded-lg shadow bg-purple-400"></div>
      </div>
    </>
  );
}

export default App;

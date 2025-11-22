import { navLinks, navIcons } from "@constants";
import dayjs from "dayjs";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <p className="font-bold">Dale's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id} className="ml-4 cursor-pointer hover:underline">
              {name}
            </li>
          ))}
        </ul>
          </div>
          <div>
              <ul>
                  {navIcons.map(({ id, img }) => (
                      <li key={id}>
                          <img src={img} className="icon-hover" alt={`icon-${id}`}/>
                      </li>
                  ))}
              </ul>

              <time>{dayjs().format("ddd MMM D h:mm A")}</time>
          </div>
    </nav>
  );
};

import React from "react";
import classNames from "classnames";
import { Link } from "@inertiajs/inertia-react";

export default function ResponsiveNavLink({
  method = "get",
  as = "a",
  href,
  active = false,
  name,
  icon: Icon,
}) {
  return (
    <Link
      href={href}
      method={method}
      as={as}
      className={classNames(
        active
          ? "bg-gray-900 text-white"
          : "text-gray-300 hover:bg-gray-700 hover:text-white",
        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
      )}
    >
      <Icon
        className={classNames(
          active ? "text-gray-300" : "text-gray-400 group-hover:text-gray-300",
          "mr-4 flex-shrink-0 h-6 w-6"
        )}
        aria-hidden="true"
      />
      {name}
    </Link>
  );
}

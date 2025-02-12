"use server";

import { getCookies, setCookie } from "cookies-next";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const setDefaultCookies = async ({
  req,
  res
}: {
  req: NextRequest;
  res: NextResponse;
}) => {
  await setCookie("test", true, { cookies, res, req });
  await setCookie("test2", true, { cookies, res, req });
  await setCookie("test3", true, { cookies, res, req });
  await setCookie("test4", true, { cookies, res, req });
};

const defaultCookiesKeys = ["test", "test2", "test3", "test4"];

export const isDefaultCookiesExisted = async () => {
  const allCookies = await getCookies({ cookies });

  const existedCookies = Object.keys(
    typeof allCookies === "object" ? allCookies : {}
  );

  return !defaultCookiesKeys
    .map(item => {
      if (!existedCookies.includes(item)) {
        return false;
      }
    })
    .includes(false);
};

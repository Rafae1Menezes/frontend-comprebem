import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";


export const protectRoute = (handler: (req: NextApiRequest, res: NextApiResponse) => Promise<void>) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    await handler(req, res);
  };
};

export default protectRoute;

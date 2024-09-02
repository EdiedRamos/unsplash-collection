import type { Collections } from "@/app/(models)";

// Default Collection
export function generateDefaultCollection(): Collections {
  return {
    collections: [
      {
        id: crypto.randomUUID(),
        name: "Random",
        photos: [
          {
            id: "1z_KKEuueoo",
            alt_description: "A large body of water surrounded by mountains",
            urls: {
              raw: "https://images.unsplash.com/photo-1722709994143-29ac7190be84?ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA2Mjd8&ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1722709994143-29ac7190be84?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA2Mjd8&ixlib=rb-4.0.3&q=85",
              regular:
                "https://images.unsplash.com/photo-1722709994143-29ac7190be84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA2Mjd8&ixlib=rb-4.0.3&q=80&w=1080",
              small:
                "https://images.unsplash.com/photo-1722709994143-29ac7190be84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA2Mjd8&ixlib=rb-4.0.3&q=80&w=400",
              thumb:
                "https://images.unsplash.com/photo-1722709994143-29ac7190be84?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA2Mjd8&ixlib=rb-4.0.3&q=80&w=200",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722709994143-29ac7190be84",
            },
          },
          {
            id: "Lpt5viNUKms",
            alt_description: "A dining room with a table and chairs",
            urls: {
              raw: "https://images.unsplash.com/photo-1724093833021-debc48eecfb6?ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA4NTR8&ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1724093833021-debc48eecfb6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA4NTR8&ixlib=rb-4.0.3&q=85",
              regular:
                "https://images.unsplash.com/photo-1724093833021-debc48eecfb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA4NTR8&ixlib=rb-4.0.3&q=80&w=1080",
              small:
                "https://images.unsplash.com/photo-1724093833021-debc48eecfb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA4NTR8&ixlib=rb-4.0.3&q=80&w=400",
              thumb:
                "https://images.unsplash.com/photo-1724093833021-debc48eecfb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA4NTR8&ixlib=rb-4.0.3&q=80&w=200",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1724093833021-debc48eecfb6",
            },
          },
          {
            id: "pc5Gd_e8E84",
            alt_description: "A person standing in front of a purple building",
            urls: {
              raw: "https://images.unsplash.com/photo-1722503281689-04fea84df54a?ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA4ODF8&ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1722503281689-04fea84df54a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA4ODF8&ixlib=rb-4.0.3&q=85",
              regular:
                "https://images.unsplash.com/photo-1722503281689-04fea84df54a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA4ODF8&ixlib=rb-4.0.3&q=80&w=1080",
              small:
                "https://images.unsplash.com/photo-1722503281689-04fea84df54a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA4ODF8&ixlib=rb-4.0.3&q=80&w=400",
              thumb:
                "https://images.unsplash.com/photo-1722503281689-04fea84df54a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA4ODF8&ixlib=rb-4.0.3&q=80&w=200",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722503281689-04fea84df54a",
            },
          },
          {
            id: "lQ2UgeBileM",
            alt_description:
              "A bright yellow door sits in front of a black building",
            urls: {
              raw: "https://images.unsplash.com/photo-1722890972886-42f4b2b93f4f?ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA5MTB8&ixlib=rb-4.0.3",
              full: "https://images.unsplash.com/photo-1722890972886-42f4b2b93f4f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA5MTB8&ixlib=rb-4.0.3&q=85",
              regular:
                "https://images.unsplash.com/photo-1722890972886-42f4b2b93f4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA5MTB8&ixlib=rb-4.0.3&q=80&w=1080",
              small:
                "https://images.unsplash.com/photo-1722890972886-42f4b2b93f4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA5MTB8&ixlib=rb-4.0.3&q=80&w=400",
              thumb:
                "https://images.unsplash.com/photo-1722890972886-42f4b2b93f4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDY4OTN8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjUxODA5MTB8&ixlib=rb-4.0.3&q=80&w=200",
              small_s3:
                "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1722890972886-42f4b2b93f4f",
            },
          },
        ],
      },
    ],
  };
}

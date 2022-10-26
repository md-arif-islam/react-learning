import React from "react";

const TailwindColumn = () => {
  return (
    <>
      <div>
        <div class="container mx-auto bg-grey py-4 text-center">
          <div class="flex border-red border -mx-4 mb-8">
            <div class="w-2/3 px-4">
              <div class="h-48 bg-grey-light flex items-center justify-center">
                2/3
              </div>
            </div>
            <div class="w-1/3 px-4">
              <div class="h-48 bg-grey-light flex items-center justify-center">
                1/3
              </div>
            </div>
          </div>
          <div class="flex border-red border -mx-4 mb-8">
            <div class="w-1/6 px-4">
              <div class="h-48 bg-grey-light flex items-center justify-center">
                1/6
              </div>
            </div>
            <div class="w-1/6 px-4">
              <div class="h-48 bg-grey-light flex items-center justify-center">
                1/6
              </div>
            </div>
            <div class="w-1/6 px-4">
              <div class="h-48 bg-grey-light flex items-center justify-center">
                1/6
              </div>
            </div>
            <div class="w-1/2 px-4">
              <div class="h-48 bg-grey-light flex items-center justify-center">
                1/2
              </div>
            </div>
          </div>
          <div class="flex border-red border -mx-4">
            <div class="w-1/3 px-4">
              <div class="flex border border-yellow h-48 -mx-4">
                <div class="w-1/3 px-4">
                  <div class="bg-grey-light h-48 flex items-center justify-center">
                    <p>
                      <span class="text-white">1/3</span>1/3
                    </p>
                  </div>
                </div>
                <div class="w-1/3 px-4">
                  <div class="bg-grey-light h-48 flex items-center justify-center">
                    <p>
                      <span class="text-white">1/3</span>1/3
                    </p>
                  </div>
                </div>
                <div class="w-1/3 px-4">
                  <div class="bg-grey-light h-48 flex items-center justify-center">
                    <p>
                      <span class="text-white">1/3</span>1/3
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/3 px-4">
              <div class="flex border border-yellow h-48 -mx-4">
                <div class="w-1/2 px-4">
                  <div class="bg-grey-light h-48 flex items-center justify-center">
                    <p>
                      <span class="text-white">1/3</span> 1/2
                    </p>
                  </div>
                </div>
                <div class="w-1/2 px-4">
                  <div class="bg-grey-light h-48 flex items-center justify-center">
                    <p>
                      <span class="text-white">1/3</span> 1/2
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-1/3 px-4">
              <div class="flex border border-yellow h-48 -mx-4">
                <div class="w-2/3 px-4">
                  <div class="bg-grey-light h-48 flex items-center justify-center">
                    <p>
                      <span class="text-white">1/3</span> 2/3
                    </p>
                  </div>
                </div>
                <div class="w-1/3 px-4">
                  <div class="bg-grey-light h-48 flex items-center justify-center">
                    <p>
                      <span class="text-white">1/3</span> 1/3
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TailwindColumn;

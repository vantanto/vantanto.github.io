<template>
  <section class="container mx-auto mt-[3%]">
    <div class="grid grid-cols-2">
      <div class="col-span-2 md:col-span-1">
        <h2 class="mb-5 text-2xl font-semibold">Education</h2>
        <BaseTimeline>
          <BaseTimelineItem
            time="Aug 2018 - Feb 2022"
            title="Bachelor of Information Systems"
            subtitle="University of Surabaya"
            text="Graduated 3.5 years, GPA 3.9"
          />
          <BaseTimelineItem
            time="2015 - 2018"
            title="High School"
            subtitle="SMAK Santo Paulus - Jember"
            text="Social Science Major"
          />
        </BaseTimeline>
      </div>
      <div class="col-span-2 md:col-span-1">
        <h2 class="mb-5 text-2xl font-semibold">Work Experience</h2>
        <BaseTimeline>
          <BaseTimelineItem
            time="Apr 2022 - 2023"
            title="Fullstack Web Developer"
            subtitle="WAKi Indonesia - Surabaya"
          >
            <div class="mt-3 text-base font-normal">
              <ul class="ms-7 list-disc">
                <li>
                  Develop and maintain multiple systems for a company consisting of 1 e-commerce platform and 6
                  sub-systems for different sub-companies
                </li>
                <li>
                  Develop cart system with various variants, order management, district order restriction, stock and
                  warehouse management, employee and customer schedule management
                </li>
                <li>
                  Create employee leave management, map interpretation for employee and customer mapping, financial
                  management, employee benefits and commission tracking. Comprehensive reports for stock, sales,
                  commissions and other relevant data
                </li>
              </ul>
            </div>
          </BaseTimelineItem>
        </BaseTimeline>
      </div>
    </div>
  </section>
</template>

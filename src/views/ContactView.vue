<script setup>
import MainLayout from '@/components/MainLayout.vue';

// Social Links - Update this links to your link
const FacebookLink = 'https://www.facebook.com/itsarielbatoon';
const InstagramLink = 'https://www.instagram.com/arielworksdev/';
const LinkedinLink = 'https://www.linkedin.com/in/ariel-batoon-679688286/';
const GithubLink = 'https://github.com/arielbatoon09';

// Page Title of Views
const pageTitle = 'Contact'
</script>

<template>
	<MainLayout :pageTitle="pageTitle">
		<!-- About Text -->
		<section class="bg-gray-100">
			<div class="mx-auto max-w-screen-lg px-4 pt-16 pb-36">
				<h1 class="text-5xl font-bold text-gray-800 lg:text-7xl w-full mb-7">Contact.</h1>
				<p class="text-2xl font-semibold text-gray-700 mb-4">Get in touch, let's have a quick call.
				</p>
				<p class="text-base text-gray-700">Feel free to send me an
					<a href="mailto:info.arielbatoon@gmail.com" class="font-medium hover:underline">email</a> or schedule a <a href="https://calendly.com/arielbatoon/consultation" class="font-medium hover:underline">free
					consultation</a> with me.
				</p>
				<!-- Desktop Social Icons -->
				<div class="mt-5">
					<h3 class="font-bold text-gray-700 text-2xl mb-4">My Socials</h3>
					<ul class="flex flex-row items-center gap-3">
						<a :href="FacebookLink" target="_blank" class="bg-white hover:bg-gray-50 p-2 rounded-full">
							<svg class="w-[20px] h-[20px] text-gray-600" aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
								<path fill-rule="evenodd"
									d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
									clip-rule="evenodd" />
							</svg>
						</a>
						<a :href="InstagramLink" target="_blank" class="bg-white hover:bg-gray-50 p-2 rounded-full">
                            <svg class="w-[20px] h-[20px] text-gray-600" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="currentColor">
                                <g>
                                    <path
                                        d="M12,2.982c2.937,0,3.285.011,4.445.064a6.072,6.072,0,0,1,2.042.379,3.4,3.4,0,0,1,1.265.823,3.4,3.4,0,0,1,.823,1.265,6.072,6.072,0,0,1,.379,2.042c.053,1.16.064,1.508.064,4.445s-.011,3.285-.064,4.445a6.072,6.072,0,0,1-.379,2.042,3.644,3.644,0,0,1-2.088,2.088,6.072,6.072,0,0,1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.072,6.072,0,0,1-2.042-.379,3.4,3.4,0,0,1-1.265-.823,3.4,3.4,0,0,1-.823-1.265,6.072,6.072,0,0,1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.072,6.072,0,0,1,.379-2.042,3.4,3.4,0,0,1,.823-1.265,3.4,3.4,0,0,1,1.265-.823,6.072,6.072,0,0,1,2.042-.379c1.16-.053,1.508-.064,4.445-.064M12,1c-2.987,0-3.362.013-4.535.066a8.108,8.108,0,0,0-2.67.511A5.625,5.625,0,0,0,1.577,4.8a8.108,8.108,0,0,0-.511,2.67C1.013,8.638,1,9.013,1,12s.013,3.362.066,4.535a8.108,8.108,0,0,0,.511,2.67A5.625,5.625,0,0,0,4.8,22.423a8.108,8.108,0,0,0,2.67.511C8.638,22.987,9.013,23,12,23s3.362-.013,4.535-.066a8.108,8.108,0,0,0,2.67-.511A5.625,5.625,0,0,0,22.423,19.2a8.108,8.108,0,0,0,.511-2.67C22.987,15.362,23,14.987,23,12s-.013-3.362-.066-4.535a8.108,8.108,0,0,0-.511-2.67A5.625,5.625,0,0,0,19.2,1.577a8.108,8.108,0,0,0-2.67-.511C15.362,1.013,14.987,1,12,1Z">
                                    </path>
                                    <path
                                        d="M12,6.351A5.649,5.649,0,1,0,17.649,12,5.649,5.649,0,0,0,12,6.351Zm0,9.316A3.667,3.667,0,1,1,15.667,12,3.667,3.667,0,0,1,12,15.667Z">
                                    </path>
                                    <circle cx="17.872" cy="6.128" r="1.32"></circle>
                                </g>
                            </svg>
						</a>
						<a :href="LinkedinLink" target="_blank"
							class="bg-white hover:bg-gray-50 hover:bg-gray-200 p-2 rounded-full">
							<svg class="w-[20px] h-[20px] text-gray-600" aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 15 15">
								<path fill-rule="evenodd"
									d="M7.979 5v1.586a3.5 3.5 0 0 1 3.082-1.574C14.3 5.012 15 7.03 15 9.655V15h-3v-4.738c0-1.13-.229-2.584-1.995-2.584-1.713 0-2.005 1.23-2.005 2.5V15H5.009V5h2.97ZM3 2.487a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
									clip-rule="evenodd" />
								<path d="M3 5.012H0V15h3V5.012Z" />
							</svg>
						</a>
						<a :href="GithubLink" target="_blank"
							class="bg-white hover:bg-gray-50 hover:bg-gray-200 p-2 rounded-full">
							<svg class="w-[24px] h-[24px] text-gray-600" width="24" height="24" viewBox="0 0 24 24"
								fill="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
							</svg>
						</a>
					</ul>
				</div>
				<div class="mt-10">
					<iframe src="https://calendly.com/arielbatoon/consultation" width="100%" height="600px" frameborder="1"
						scrolling="yes">
					</iframe>
				</div>
			</div>
		</section>
	</MainLayout>
</template>
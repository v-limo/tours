

export interface Progress {
  status: string
  message: null
  data: Datum[]
}

export interface Datum {
  typeOfApp: string
  welcome_page_pdf_image: string
  diploma_y_axis: number
  general_background_image: string
  follow_the_sun: number
  displayName: string
  welcome_page_copy: string
  ics_copy: string
  trivia_url: string
  secondary_color: string
  register_url: string
  splashScreen: string
  language: string
  logo_wide_color: string
  coming_soon: number
  appNameDevice: string
  end_date: string
  source_keywords: string
  has_other_area: number
  prize_center_image: string
  region_hidden: number
  name: string
  diploma_text_size: number
  diploma_text_width: number
  has_training: number
  reward_url: null
  primary_color: string
  background_video: null
  splash_screen: string
  live: number
  chapter_logic: string
  app_id: string
  diploma_x_axis: number
  chapters: Chapter[]
  welcome_page_subtitle: string
  welcome_page_title: string
  logo_wide_white: string
  start_date: string
  has_diploma: number
  timezone: string
  login_image: string
  sponsor_image: string
  appIcon: string
  directory_url: string
  tier_feature: number
  swapcard_url: string
  points: number
  welcome_page_pdf: string
  last_edited: string
  client_id: number
  badge: null
}

export interface Chapter {
  total_pages: number
  specialization: number
  progress: number
  partner: number
  live: boolean
  last_page: number
  inserted_at: Date
  essentials_chapter: number
  comingSoon: string
  chapter: string
}



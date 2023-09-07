function TestimonyDetails({ img, content, date, alt }) {
    return(
        <div className="grid gap-3 rounded-lg border  p-3 border-[#6642d1]">
        <div className="flex  justify-between items-center">
          <span className="grid">💥 💥 💥 💥 💥</span>
          <img
            src={img}
            className="w-[50px]"
            alt={alt}
          />
        </div>
        <p className="text-sm">{content}</p>
        <p className="text-xs">Play Store review, {date}</p>
      </div>
    )
}

export default TestimonyDetails
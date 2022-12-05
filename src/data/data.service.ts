import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { range, sample, sampleSize } from 'lodash';
const alphabetLetters = range(26).map((e) => [
  String.fromCharCode(e + 'a'.charCodeAt(0)),
  String.fromCharCode(e + 'A'.charCodeAt(0)),
]).flat();

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,
  ) {
    this.generateUserData(100);
   }
  async generateUserData(soLuong: number) {
    const ho = [
      'Nguyễn',
      'Hồ',
      'Thái',
      'Chu',
      'Trần',
      'Lý',
      'Phạm',
      'Phan',
      'Hoàng',
      'Dương',
      'Lê',
      'Trịnh',

    ]
    const tenDem = [
      'Văn',
      'Thùy',
      'Thị',
      'Cảnh',
      'Phước',
      'Quốc',
      'Trường',
      'Văn',
      'Hoàng',
      'Đặng',
      'Thúy',
      'Thu',
      'Mỹ',
    ]
    const ten = [
      'Long',
      'Ly',
      'Bình',
      'An',
      'Khang',
      'Tường',
      'Quỳnh',
      "Uyên",
      'Hoài',
      'Hùng',
      'Khánh',
      'Bảo',
      'Trung',
      'An',
      'Danh',
      'Anh',
      'Ánh',
      'Hiền',
      'Phương',
      'Huyền',
    ]
    const ngheNghiep = [
      'Giáo viên',
      'Nông dân',
      'Công nhân',
      'Bộ đội',
      'Nội trợ',
      'Bác sĩ',
      'Y tá',
      'Lao động tự do',
      'Nhân viên',
      'Lập Trình Viên',
    ];
    const noiSinh = [
      'Tp. Hòa Bình,Hoà Bình',
      'Nam Đàn,Nghệ An',
      'Thanh Chương, Nghệ An',
      'Hoàng Mai,Hà Nội',
      'Lục Ngạn,Bắc Giang',
      'Kiến Xương,Thái Bình',
      'Ý Yên, Nam Định',
      'Hoằng Hóa, Thanh Hóa',
      'Đức Hòa, Long An',
      'Tp. Thủ Đầu Một, Bình Dương',
      'Thạch Thất, Hà Nội',
    ];
    const dauSoDT = [
      '097',
      '098',
      '034',
      '093',
      '094',
      '090',
      '076',
      '077',
      '078',
      '038',
    ];
    const datas = range(soLuong).map((_) => {
      const temp = `${sampleSize(alphabetLetters, sample([4, 5, 6])).join(
        '',
      )}, ${sampleSize(alphabetLetters, sample([4, 5, 6])).join('')}, ${sample(
        noiSinh,
      )}`;
      const start = new Date(1910, 1, 1);
      const end = new Date(2022, 12, 31);
      return this.userRepo.save(
        this.userRepo.create({
          ten: `${sample(ho)} ${sample(tenDem)} ${sample(ten)}`,
          biDanh: `Bi danh ${sampleSize(alphabetLetters, 4).join('')}`,
          canCuocCongDan: `0${sampleSize(range(0, 10), 1)}02020${sampleSize(range(0, 10), 6).join('')}`,
          ngheNghiep: sample(ngheNghiep),
          danToc: 'Kinh',
          daDangKi: false,
          noiSinh: sample(temp),
          queQuan: sample(temp),
          noiThuongTruTruocDo: `${sampleSize(alphabetLetters, 2).join('')}, ${sampleSize(alphabetLetters, sample([4, 5, 6])).join('')}, , ${sample(noiSinh)}`,
          soDienThoai: `${sample(dauSoDT)}${sampleSize(range(0, 9), 7).join('')}`,
          ngaySinh: new Date(
            new Date(
              start.getTime() +
              Math.random() * (end.getTime() - start.getTime()),
            ).setHours(0, 0, 0, 0),
          ),
          gioiTinh: sample(['Nam', 'Nữ']),
        }),
      );
    });
    await Promise.all(datas);
    console.log('User data inserted');
  }
}

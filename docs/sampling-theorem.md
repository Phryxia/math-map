# 표본화 정리

# 개요

표본화 정리는 대역제한 함수가 균일한 표본값으로 완전히 복원된다는 정리다. 간격 $h$ 로 재어 값 $f(nh)$ 만 남기면 그 사이의 값은 버려지는데, $f$ 의 [Fourier 변환](fourier-transform.md)이 $\lbrack -B,B\rbrack$ 밖에서 $0$ 이고 $h\le 1/(2B)$ 이면 버린 값이 표본에서 되살아난다. 복원식은 표본값을 계수로 한 sinc 함수의 합이다.

연속 신호를 유한한 수열로 바꾸는 근거가 이 정리이고, 바꿀 때 지켜야 하는 표본 간격의 상한을 정리가 정한다.

# 직관

함수 $f$ 를 간격 $h$ 로 재어 값 $f(0), f(h), f(2h), \dots$ 만 적어 둔다. 그 사이의 값은 버렸다. 버린 값을 표본에서 되찾을 수 있는가.

$f(t)=\sin(2\pi t)$ 를 $h=1$ 로 재어 보자. 모든 정수 $n$ 에서 $\sin(2\pi n)=0$ 이므로 표본이 전부 $0$ 이다. 그런데 $g=0$ 도 같은 표본을 준다. 표본만으로 이 둘을 가를 수 없으니 복원이 안 된다.

$\sin(2\pi t)$ 는 한 주기의 길이가 $1$ 이고, 간격 $1$ 은 한 주기에 한 번만 재는 것이다. 한 주기 안에서 올라갔다 내려오는 움직임을 한 점으로는 잡지 못한다. 간격을 $1/3$ 로 줄이면 표본은 $0, \sqrt3/2, -\sqrt3/2, 0, \sqrt3/2, \dots$ 이고 $g=0$ 과 갈린다. 올라감과 내려옴이 둘 다 표본에 남았다.

막힌 이유는 $f$ 의 진동이 간격보다 빠른 것이었으니, $f$ 에 든 진동의 주파수에 상한을 두고 간격을 그 상한에 맞춘다. $\hat f$ 의 받침이 $\lbrack -B,B\rbrack$ 에 들면 $f$ 는 주파수 $B$ 보다 빠른 진동을 담지 않는다.

이제 표본값만으로 $\hat f$ 를 계산한다. 간격 $h$ 로 잰 값들에 [Poisson 합 공식](poisson-summation.md)을 쓰면 $\hat f$ 를 $1/h$ 씩 평행이동해 모두 더한 함수가 나온다. 더하는 조각의 받침은 길이 $2B$ 이고 이동 간격은 $1/h$ 이므로, $1/h\ge 2B$ 이면 조각들이 겹치지 않는다. 겹치지 않으면 한 조각을 잘라내 $\hat f$ 를 되찾고, 역변환하면 버린 값까지 포함한 $f$ 가 나온다.

# 정의

## 대역제한 함수

$f\in L^2(\mathbb R)$ 의 Fourier 변환 $\hat f$ 가 $\lbrack -B,B\rbrack$ 밖에서 거의 어디서나 $0$ 이면 $f$ 는 **대역 $B$ 로 제한**된다. 그런 $f$ 전체가 이루는 $L^2(\mathbb R)$ 의 닫힌 부분공간을 **Paley–Wiener 공간** $\mathrm{PW}\_B$ 라 한다.

## 표본과 표본화율

간격 $h\gt 0$ 에 대해 수열 $\lbrace f(nh)\rbrace\_{n\in\mathbb Z}$ 가 $f$ 의 **표본**이고 $1/h$ 가 **표본화율**이다. 대역 $B$ 에 대해 $1/h=2B$ 인 표본화율을 **Nyquist 율**이라 한다.

## sinc 함수

$$
\mathrm{sinc}(t)=\frac{\sin \pi t}{\pi t}, \qquad \mathrm{sinc}(0)=1
$$

$\mathrm{sinc}$ 는 $\lbrack -1/2,1/2\rbrack$ 의 지시함수의 Fourier 역변환이고, $0$ 이 아닌 정수 $n$ 에서 $\mathrm{sinc}(n)=0$ 이다.

# 성질

## 표본화 정리

$f\in\mathrm{PW}\_B$ 이고 $h\le 1/(2B)$ 이면 다음이 성립한다.[^1]

$$
f(t)=\sum_{n\in\mathbb Z}f(nh)\thinspace\mathrm{sinc}\negthinspace\left(\frac{t-nh}{h}\right)
$$

수렴은 $L^2(\mathbb R)$ 에서이고 $\mathbb R$ 의 콤팩트 부분집합 위에서 균등하다.

증명의 요지. 주기화 $\Phi(\xi)=\sum_k\hat f(\xi-k/h)$ 를 본다. $\Phi$ 는 주기 $1/h$ 이고, Poisson 합 공식이 그 Fourier 계수를 $h\thinspace f(nh)$ 로 준다. $\hat f$ 의 받침이 길이 $2B\le 1/h$ 이므로 $k\ne 0$ 인 조각은 $\lbrack -1/(2h),1/(2h)\rbrack$ 과 겹치지 않고, 그 구간에서 $\Phi=\hat f$ 다. 구간의 지시함수를 곱해 $\hat f$ 를 복원한 뒤 역변환하면 지시함수의 역변환인 sinc 와 평행이동 인자가 남는다.

## 정규직교 기저

$h=1/(2B)$ 일 때 $\lbrace \sqrt{2B}\thinspace\mathrm{sinc}(2Bt-n)\rbrace\_{n\in\mathbb Z}$ 는 $\mathrm{PW}\_B$ 의 정규직교 기저다. 이 계의 Fourier 변환은 받침 $\lbrack -B,B\rbrack$ 위의 지수함수계 $e^{-2\pi i n\xi/(2B)}/\sqrt{2B}$ 이고, 그 지수함수계가 $L^2(\lbrack -B,B\rbrack)$ 의 정규직교 기저다. 따라서 Parseval 등식이 표본의 꼴로 쓰인다.

$$
\Vert f\Vert\_2^2=h\sum_{n\in\mathbb Z}\lvert f(nh)\rvert^2
$$

## 에일리어싱

$1/h\lt 2B$ 이면 조각들이 겹치고 $\lbrack -1/(2h),1/(2h)\rbrack$ 에서 $\Phi\ne\hat f$ 다. 표본에서 복원한 함수의 변환은 $\Phi$ 를 그 구간으로 자른 것이므로, 대역 밖 성분이 대역 안의 주파수로 옮겨와 더해진다. 주파수 $\xi$ 의 성분은 $\xi-k/h$ 가 그 구간에 드는 $k$ 를 통해 되접힌다. 이 되접힘이 **에일리어싱**이다.

## 절단 오차

$\mathrm{sinc}(t)$ 는 $\lvert t\rvert^{-1}$ 규모로만 작아지므로, 복원식의 합을 $\lvert n\rvert\le N$ 으로 자르면 꼬리가 느리게 줄어든다. 표본화율을 Nyquist 율보다 높게 잡으면 $\hat f$ 의 받침과 구간 끝 사이에 여유가 생기고, 지시함수 대신 그 여유에서 매끄럽게 떨어지는 창함수를 쓸 수 있다. 창함수의 역변환은 sinc 보다 빨리 감소하므로 같은 $N$ 에서 꼬리가 작아진다.

# 활용

- **디지털 신호 처리.** [이산 Fourier 변환](fourier.md)이 다루는 유한 수열은 연속 신호의 표본이다. 표본화율이 Nyquist 율에 못 미치면 되접힘이 일어나므로 표본화 전에 저역통과 필터로 대역을 제한한다.
- **채널 용량.** [채널 부호화](channel-coding.md)가 다루는 이산 채널로 대역폭 $W$ 의 연속시간 채널을 바꿀 때, 길이 $T$ 의 구간이 약 $2WT$ 개의 실수 자유도를 갖는다는 계산을 표본화 정리가 준다.
- **수치적분.** [Poisson 합 공식](poisson-summation.md)의 사다리꼴 오차 공식이 같은 주기화를 쓴다. $f\in\mathrm{PW}\_B$ 이고 $1/h\ge 2B$ 이면 오차항이 모두 사라져 사다리꼴 합이 적분과 같다.
- **시간–주파수 제약.** [불확정성 원리](uncertainty-principle.md)의 받침 판에 따라 대역제한 함수는 받침이 콤팩트하지 않다. 유한 시간의 표본만으로는 복원이 끝나지 않고 절단 오차가 남는다.

[^1]: C. E. Shannon, "Communication in the presence of noise", *Proceedings of the Institute of Radio Engineers* 37 (1949), 10–21. 같은 정리가 E. T. Whittaker (1915) 의 보간 공식과 V. A. Kotelnikov (1933) 에 앞서 나온다.

# 연관 문서

## 선수지식

- [Fourier 변환](fourier-transform.md)
- [Poisson 합 공식](poisson-summation.md)

## 더 알아보기

아직 연결한 문서가 없다.

#analysis #information_theory #functional_analysis

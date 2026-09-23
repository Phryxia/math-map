# Baker 정리

# 개요

$0$ 이 아닌 대수적 수의 로그를 정수 계수로 결합한 값이 $0$ 이 아니면, 그 절댓값에 계수의 크기로 적은 하한이 있다. 하한의 상수를 계산할 수 있다는 점이 [초월수](transcendental-numbers.md) 이론의 다른 결과와 다르다.

이 하한에서 Diophantus 방정식의 해 크기에 상한이 나오고, 상한 아래를 모두 훑으면 해를 빠짐없이 찾는 절차가 된다.

# 직관

$2^m-3^n=1$ 을 만족하는 큰 $m,n$ 이 있는지 묻는다. $2^m$ 과 $3^n$ 이 $1$ 만큼 떨어져 있으려면 두 수의 비가 $1$ 에 매우 가까워야 한다.

$\Lambda=m\log 2-n\log 3$ 으로 두면 $2^m/3^n=e^{\Lambda}$ 다. 비가 $1$ 에 가까우면 $e^{\Lambda}-1$ 이 작고 $\Lambda$ 도 작다. 식으로 쓰면 $1=\vert 2^m-3^n\vert=3^n\vert e^{\Lambda}-1\vert$ 이므로 $\vert\Lambda\vert$ 가 $3^{-n}$ 규모다. $n$ 이 커지면 $\Lambda$ 는 지수적으로 작아진다.

한편 $\log 2/\log 3$ 이 무리수이므로 $\Lambda\ne 0$ 이다. $0$ 이 아닌 수가 얼마나 작을 수 있는지를 $m,n$ 으로 답할 수 있으면 두 한계가 충돌하는 지점에서 $n$ 의 상한이 나온다. Baker 정리가 주는 하한은 $n$ 의 거듭제곱의 역수 규모이고, 지수적으로 작은 $3^{-n}$ 은 어느 지점부터 이 하한을 밑돌 수 없다.

# 정의

## 로그의 일차형식

$\alpha_1,\dots,\alpha_n$ 이 $0$ 이 아닌 대수적 수이고 $b_1,\dots,b_n$ 이 정수일 때 다음을 **로그의 일차형식**이라 한다.

$$
\Lambda=b_1\log\alpha_1+\dots+b_n\log\alpha_n
$$

$\log$ 는 각 $\alpha_i$ 마다 고정한 분지를 쓴다. $B=\max_i\vert b_i\vert$ 로 계수의 크기를 재고, $d=\lbrack\mathbb Q(\alpha_1,\dots,\alpha_n):\mathbb Q\rbrack$ 으로 체의 차수를 잰다.

## Weil 높이

차수 $d$ 인 대수적 수 $\alpha$ 의 최소다항식을 $a_0\prod_{i=1}^{d}(x-\alpha^{(i)})$ 라 할 때 **절대 로그 높이**는 다음이다.

$$
h(\alpha)=\frac1d\Bigl(\log\vert a_0\vert+\sum_{i=1}^{d}\log\max(1,\vert\alpha^{(i)}\vert)\Bigr)
$$

$\alpha=p/q$ 가 기약분수이면 $h(\alpha)=\log\max(\vert p\vert,\vert q\vert)$ 다.

# 성질

## 일차독립 정리

**정리(Baker).** $\log\alpha_1,\dots,\log\alpha_n$ 이 $\mathbb Q$ 위에서 일차독립이면 $1,\log\alpha_1,\dots,\log\alpha_n$ 이 대수적 수 위에서 일차독립이다.[^1]

따라서 대수적 수 $\beta_0,\dots,\beta_n$ 이 모두 $0$ 은 아니면 $\beta_0+\beta_1\log\alpha_1+\dots+\beta_n\log\alpha_n\ne 0$ 이다. $n=1$ 이고 $\beta_0\ne 0$ 인 경우가 Hermite–Lindemann 정리이고, $n=2$ 이고 $\beta_0=0$ 인 경우가 Gelfond–Schneider 정리다. 두 고전 정리가 이 진술의 특수 사례다.

## 유효 하한

**정리(Baker, Wüstholz).** $\Lambda\ne 0$ 이면 다음이 성립한다.[^2]

$$
\log\vert\Lambda\vert\ \gt\ -C(n,d)\thinspace h(\alpha_1)\cdots h(\alpha_n)\thinspace\log B
$$

$C(n,d)$ 는 $n$ 과 $d$ 만으로 적히는 명시적 상수다. $B$ 에 대한 의존이 $\log B$ 에 그친다는 것이 응용의 조건이다. $\vert\Lambda\vert$ 가 $B$ 의 지수적으로 작다는 정보가 따로 있으면 두 부등식이 $B$ 의 상한을 준다.

## 증명의 요지

Gelfond 와 Schneider 의 보조함수 방법을 여러 변수로 확장한다.

$\Lambda$ 가 작다고 가정하고, 계수를 미지수로 둔 지수다항식 $\Phi(z_1,\dots,z_{n-1})$ 을 세운다. 계수가 만족할 조건은 정수 계수 일차 연립방정식이고, 미지수의 개수를 식의 개수보다 많게 잡는다. 미지수가 식보다 많은 그런 연립방정식에 계수의 크기로 상한이 정해지는 자명하지 않은 정수 해가 있다는 것이 Siegel 보조정리다. 그 해로 만든 $\Phi$ 는 격자점에서 높은 계수의 도함수까지 $0$ 이 된다.

여기에 최대절댓값 원리를 반복 적용해 $\Phi$ 가 $0$ 이 되는 점의 범위를 넓힌다. 외삽을 충분히 반복하면 $0$ 이 아니어야 할 [행렬식](determinants.md)이 $1$ 보다 작아져 모순이 나온다. 모순이 나오는 지점을 추적하면 $\vert\Lambda\vert$ 의 하한이 나온다. ∎

# 활용

- **류수 $1$ 인 허수 이차체.** 판별식이 $-163$ 까지 아홉 개뿐이라는 것이 로그의 일차형식 하한으로 증명된다. 류수가 $2$ 인 경우의 완전한 목록도 같은 방법으로 얻는다.[^3]
- **Thue 방정식.** 차수 $3$ 이상의 기약 이진형식 $F$ 에 대해 $F(x,y)=m$ 의 정수해에 계산 가능한 크기 상한이 나온다. [Diophantine 근사](diophantine-approximation.md)의 Roth 정리도 해가 유한함을 주지만 그 증명은 상한을 내놓지 않는다.
- **지수 방정식.** $x^p-y^q=1$ 의 해에 $x,y,p,q$ 모두의 상한이 나온다. $S$-단위 방정식과 [타원곡선](elliptic-curves.md)의 정수점 계산도 같은 하한을 쓴다.[^4]

[^1]: A. Baker, *Linear forms in the logarithms of algebraic numbers I*, Mathematika 13 (1966), 204–216. 후속 논문 II–IV 가 1967–1968 년에 이어진다.
[^2]: A. Baker, G. Wüstholz, *Logarithmic forms and group varieties*, Journal für die reine und angewandte Mathematik 442 (1993), 19–62. 이 논문이 상수를 군 다양체 위의 부분군 정리로 정리해 명시했다.
[^3]: H. M. Stark, *A complete determination of the complex quadratic fields of class-number one*, Michigan Mathematical Journal 14 (1967), 1–27.
[^4]: R. Tijdeman, *On the equation of Catalan*, Acta Arithmetica 29 (1976), 197–209.

# 연관 문서

## 선수지식

- [초월수](transcendental-numbers.md)

## 더 알아보기

아직 연결한 문서가 없다.

#number_theory #field_theory #analysis

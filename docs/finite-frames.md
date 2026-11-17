# 유한 프레임

# 개요

**유한 프레임(finite frame)** 은 유한 차원 내적 공간을 생성하는 벡터 몇 개로, 기저보다 많아도 되는 것이다. 평면의 벡터를 정규직교 기저의 두 좌표로 보내다가 좌표 하나가 전송 중에 사라지면 그 성분은 되살릴 수 없다. 120° 간격의 단위 벡터 세 개와의 내적 세 개를 보내면, 그 가운데 아무 둘만 도착해도 벡터가 정해진다. 프레임은 이렇게 중복된 계수로 벡터를 적고, 계수에서 벡터를 되살리는 공식을 프레임 연산자의 역으로 준다.

# 직관

평면의 세 단위 벡터를 다음과 같이 둔다.

$$
f\_1=(0,1),\qquad f\_2=\left(-\tfrac{\sqrt3}{2},-\tfrac12\right),\qquad f\_3=\left(\tfrac{\sqrt3}{2},-\tfrac12\right)
$$

$x=(1,0)$ 과의 내적은 $0$, $-\tfrac{\sqrt3}2$, $\tfrac{\sqrt3}2$ 이고 제곱의 합은 $\tfrac32$ 다. 어떤 $x$ 를 넣어도 내적의 제곱의 합은 $\tfrac32\vert x\vert^2$ 이다. 세 벡터가 모든 방향을 같은 비율로 잰다.

그래서 계수에 벡터를 곱해 더하면 $x$ 의 $\tfrac32$ 배가 나온다. $x=(1,0)$ 에서 $\tfrac23\sum\_i\langle x,f\_i\rangle f\_i$ 를 계산하면 다음과 같다.

$$
\tfrac23\left(\tfrac{\sqrt3}{2}\cdot\left(\tfrac{\sqrt3}{2},\tfrac12\right)+\tfrac{\sqrt3}{2}\cdot\left(\tfrac{\sqrt3}{2},-\tfrac12\right)\right)=\tfrac23\left(\tfrac32,0\right)=(1,0)
$$

계수 $\langle x,f\_1\rangle$ 이 사라져도 $f\_2$ 와 $f\_3$ 이 평면을 생성하므로 남은 두 계수로 $x$ 가 정해진다. 정규직교 기저에서는 계수 하나를 잃으면 그 방향의 성분을 되살릴 수 없다.

# 정의

## 프레임

$H$ 를 $d$ 차원 내적 공간이라 하자. 벡터 $f\_1,\dots,f\_N\in H$ 가 상수 $0\lt A\le B$ 에 대해 모든 $x\in H$ 에서 다음을 만족하면 이 벡터들을 **프레임(frame)** 이라 하고, $A$ 와 $B$ 를 **프레임 한계(frame bounds)** 라 한다.

$$
A\vert x\vert^2\le\sum\_{i=1}^N\vert\langle x,f\_i\rangle\vert^2\le B\vert x\vert^2
$$

유한 차원에서는 $f\_1,\dots,f\_N$ 이 $H$ 를 생성하는 것과 프레임인 것이 같다. $A=B$ 이면 **단단한 프레임(tight frame)** 이라 하고, $A=B=1$ 이면 **Parseval 프레임(Parseval frame)** 이라 한다. 직관 절의 세 벡터는 $A=B=\tfrac32$ 인 단단한 프레임이다.

## 프레임 연산자와 쌍대 프레임

$Sx=\sum\_i\langle x,f\_i\rangle f\_i$ 로 정한 선형사상 $S:H\to H$ 를 **프레임 연산자(frame operator)** 라 한다. $f\_i$ 를 열로 둔 행렬을 $F$ 라 하면 $S=FF^\ast$ 다. $g\_i=S^{-1}f\_i$ 를 **표준 쌍대 프레임(canonical dual frame)** 이라 한다.

직관 절의 프레임에서 $S=\tfrac32I$ 이고 $g\_i=\tfrac23f\_i$ 다.

# 성질

## 재구성 공식

정리. $f\_1,\dots,f\_N$ 이 프레임이면 $S$ 는 자기수반이고 양의 정부호이며, 모든 $x\in H$ 에 대해 다음이 성립한다. 가장 좋은 프레임 한계는 $S$ 의 가장 작은 고윳값과 가장 큰 고윳값이다[^1].

$$
x=\sum\_{i=1}^N\langle x,g\_i\rangle f\_i=\sum\_{i=1}^N\langle x,f\_i\rangle g\_i
$$

증명의 요지. $\langle Sx,x\rangle=\sum\_i\vert\langle x,f\_i\rangle\vert^2$ 이므로 프레임 부등식은 $AI\le S\le BI$ 와 같다. 그러므로 $S$ 는 가역이고, $S^{-1}$ 이 자기수반이므로 다음이 성립한다.

$$
x=SS^{-1}x=\sum\_i\langle S^{-1}x,f\_i\rangle f\_i=\sum\_i\langle x,g\_i\rangle f\_i
$$

[스펙트럼 정리](spectral-theorem.md)로 $S$ 의 고윳값이 최적 한계다.

## 정규직교 기저의 사영

정리. $H$ 의 Parseval 프레임 $N$ 개는 $N$ 차원 공간의 정규직교 기저를 $H$ 와 같은 차원의 부분공간에 직교 사영한 것과 같다. 이것을 Naimark 정리(Naimark's theorem)라 한다[^1].

직관 절의 프레임에 $\sqrt{2/3}$ 를 곱하면 Parseval 프레임이다. 이것은 $\mathbb R^3$ 의 표준 기저 $e\_1,e\_2,e\_3$ 을 평면 $x+y+z=0$ 에 사영한 벡터 $e\_1-\tfrac13(1,1,1)$ 등과 같은 배치이고, 그 길이가 $\sqrt{2/3}$ 다.

## 프레임 퍼텐셜

단위 벡터 $f\_1,\dots,f\_N$ 의 **프레임 퍼텐셜(frame potential)** 은 다음이다.

$$
\mathrm{FP}=\sum\_{i=1}^N\sum\_{j=1}^N\vert\langle f\_i,f\_j\rangle\vert^2
$$

정리. $N\ge d$ 이면 $\mathrm{FP}\ge N^2/d$ 이고, 등호는 단단한 프레임일 때만 성립한다[^2].

증명의 요지. $\mathrm{FP}$ 는 Gram 행렬 $F^\ast F$ 의 성분 제곱의 합이고 $S=FF^\ast$ 의 고윳값 $\lambda\_1,\dots,\lambda\_d$ 의 제곱의 합과 같다. 고윳값의 합은 대각합 $N$ 이므로 [Cauchy–Schwarz 부등식](cauchy-schwarz.md)으로 $\sum\_k\lambda\_k^2\ge N^2/d$ 이고, 등호는 고윳값이 모두 $N/d$ 일 때다.

직관 절의 프레임에서 대각 성분 $3$ 개가 $1$ 이고 나머지 $6$ 개가 $\tfrac14$ 이므로 $\mathrm{FP}=3+\tfrac32=\tfrac92=3^2/2$ 다.

# 활용

- 지워짐에 강한 전송. 계수 몇 개가 사라져도 남은 벡터들이 공간을 생성하면 재구성 공식을 남은 프레임으로 다시 세워 벡터를 되살린다.
- 시간-주파수 분석. [단시간 Fourier 변환](short-time-fourier-transform.md)의 창 함수를 시간과 주파수로 옮긴 함수들은 기저가 아닌 프레임이고, 신호를 그 계수에서 쌍대 프레임으로 되살린다.
- [Welch 상한](welch-bound.md). 단위 벡터 $N$ 개의 내적 최댓값의 하한이 프레임 퍼텐셜의 하한에서 나오고, 등호는 등각 단단한 프레임에서 성립한다.
- 양자 측정. [대칭 정보 완전 측정](sic-povm.md)은 $d$ 차원 복소 공간의 단위 벡터 $d^2$ 개로 된 등각 단단한 프레임이다.

[^1]: Ole Christensen, *An Introduction to Frames and Riesz Bases*, 2nd ed., Birkhäuser, 2016, 1 장.
[^2]: John J. Benedetto, Matthew Fickus, "Finite normalized tight frames", *Advances in Computational Mathematics* 18 (2003), 357–385.

# 연관 문서

## 선수지식

- [스펙트럼 정리](spectral-theorem.md)

## 더 알아보기

아직 연결한 문서가 없다.

#linear_algebra #signal_processing #functional_analysis

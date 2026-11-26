# Flop

# 개요

**Flop(flop)** 은 삼차원 이상의 다양체에서 표준인자와 교차수가 $0$ 인 곡선을 떼어 내고 다른 곡선으로 바꿔 끼우는 쌍유리 변환이다. 원뿔 $xy=zw$ 는 원점에서 특이한데, 원점 하나를 사영직선 하나로 바꿔 특이점을 없애는 방법이 두 가지 있고 두 결과는 원점 위에서 서로 다르다. 두 결과를 잇는 변환이 flop 이다.

[극소 모형 프로그램](minimal-model-program.md)이 끝나서 얻는 극소 모형이 하나로 정해지지 않는다는 것을 flop 이 보이고, 같은 다양체의 극소 모형들은 flop 으로 서로 이어진다.

# 직관

$\mathbb C^4$ 안의 삼차원 다양체 $Y=\lbrace xy=zw\rbrace$ 는 원점에서만 특이하다. 원점에서 [부풀림](blow-ups.md)을 하면 원점이 $\mathbb P^1\times\mathbb P^1$ 로 바뀌고 특이점이 없어진다. 이 방법은 점 하나를 곡면 하나로 바꾼다.

$xy=zw$ 는 $x/z=w/y$ 로 쓸 수 있으므로, 원점 밖에서는 비 $\lbrack x:z\rbrack=\lbrack w:y\rbrack$ 가 $\mathbb P^1$ 의 점 하나로 정해진다. 이 비를 새 좌표 $\lbrack s:t\rbrack$ 로 붙인 다음 집합을 $X^-$ 라 한다.

$$
X^-=\bigl\lbrace\bigl((x,y,z,w),\lbrack s:t\rbrack\bigr)\thinspace:\thinspace xt=zs,\ wt=ys\bigr\rbrace
$$

$X^-$ 는 매끄럽고, 원점 위에는 $\lbrack s:t\rbrack$ 가 자유로운 사영직선 $C^-$ 하나가 있다. 원점 밖에서는 $Y$ 와 같다.

$xy=zw$ 는 $x/w=z/y$ 로도 쓸 수 있다. 비 $\lbrack x:w\rbrack=\lbrack z:y\rbrack$ 를 붙이면 같은 방식으로 원점 위에 사영직선 $C^+$ 를 갖는 매끄러운 $X^+$ 가 나온다. $X^-$ 와 $X^+$ 는 원점 밖에서 같지만, 평면 $D=\lbrace x=z=0\rbrace\subset Y$ 의 두 쪽 모습이 다르다.

$X^-$ 에서 $D$ 의 점은 $\lbrack s:t\rbrack=\lbrack w:y\rbrack$ 를 갖고, 원점 위에서는 $C^-$ 전체가 $D$ 에 붙는다. $X^+$ 에서 $D$ 의 점은 $x=z=0$ 이므로 언제나 $\lbrack x:w\rbrack=\lbrack 0:1\rbrack$ 이고, $D$ 는 $C^+$ 와 한 점에서만 만난다. $C^-$ 를 떼어 내고 $C^+$ 를 끼우는 이 변환이 Atiyah flop 이다.

# 정의

## 작은 수축

정규 다양체 사이의 쌍유리 사상 $f:X\to Y$ 가 예외 집합의 여차원이 $2$ 이상이면 **작은 수축(small contraction)** 이라 한다. 직관 절의 $X^-\to Y$ 와 $X^+\to Y$ 는 곡선 하나를 점으로 보내므로 삼차원에서 작은 수축이다.

## Flop

작은 수축 $f:X\to Y$ 가 상대 Picard 수 $1$ 이고 수축되는 곡선 $C$ 가 $K\_X\cdot C=0$ 을 만족한다고 하자. $X$ 위의 인자 $D$ 가 $D\cdot C\lt 0$ 이면, 작은 수축 $f^+:X^+\to Y$ 와 그 위의 $D$ 의 고유 변환 $D^+$ 가 있어 $D^+$ 가 $f^+$ 가 수축하는 곡선과 양으로 만날 때 쌍유리 사상 $X\dashrightarrow X^+$ 를 $D$ 에 대한 **flop** 이라 한다[^1].

꽃잎 변환(flip)과의 차이는 표준인자의 부호다. 꽃잎 변환에서는 $K\_X\cdot C\lt 0$ 이고 $K\_{X^+}\cdot C^+\gt 0$ 이어서 표준인자가 나아지고, flop 에서는 양쪽 모두 $0$ 이라 표준인자가 그대로다.

## Atiyah flop

직관 절의 $X^-\dashrightarrow X^+$ 를 **Atiyah flop** 이라 한다. 두 곡선은 $C^\pm\cong\mathbb P^1$ 이고 법다발이 $\mathcal O(-1)\oplus\mathcal O(-1)$ 이다.

[딸림 공식](adjunction-formula.md)에 따라 $\deg N\_{C/X}=2g(C)-2-K\_X\cdot C$ 이다. 좌변이 $-2$ 이고 $g=0$ 이므로 $K\_{X^\pm}\cdot C^\pm=0$ 이다. 직관 절의 평면 $D$ 에 대해서는 다음이 성립한다.

$$
D^-\cdot C^-=-1,\qquad D^+\cdot C^+=1
$$

$X^-$ 에서 $D^-$ 는 평면을 한 점에서 부풀린 곡면이고 $C^-$ 는 그 예외 곡선이다. 법다발의 완전열에서 $-2=\deg N\_{C/D}+D\cdot C=-1+D\cdot C$ 이므로 $D^-\cdot C^-=-1$ 이다. $X^+$ 에서는 $D^+$ 가 $C^+$ 와 한 점에서 가로지르므로 $1$ 이다.

# 성질

## 부풀림으로 본 Atiyah flop

$X^-$ 에서 $C^-$ 를 부풀리면 $Y$ 를 원점에서 부풀린 다양체가 나오고, 예외 인자는 $\mathbb P^1\times\mathbb P^1$ 이다. 이 곡면의 두 직선족 가운데 $C^-$ 쪽 족을 수축하면 $X^-$, 다른 족을 수축하면 $X^+$ 다. 그러므로 Atiyah flop 은 부풀림 한 번과 다른 방향의 수축 한 번이다.

## 토릭 기술

$Y$ 는 [토릭 다양체](toric-varieties.md)이고, 그 뿔은 $\mathbb Z^3$ 에서 꼭짓점이 정사각형을 이루는 네 벡터 $(1,0,0)$, $(0,1,0)$, $(0,0,1)$, $(1,1,-1)$ 로 생성된다. 정사각형을 두 대각선 가운데 하나로 나눠 뿔을 두 개의 매끄러운 뿔로 쪼개면 $X^-$ 와 $X^+$ 가 나온다. 쪼개는 대각선의 반직선 두 개로 된 면이 수축되는 곡선 $C^\pm$ 다.

## Flop 의 존재와 극소 모형

**정리(Kollár, 1989).** 단자 특이점(terminal singularity)을 갖는 삼차원 다양체의 flop 은 존재한다[^1].

**정리(Kawamata, 2008).** 같은 다양체의 서로 다른 극소 모형은 flop 의 유한열로 이어진다[^2].

극소 모형 프로그램은 수축 순서를 고르는 데 자유가 있어 끝나는 모형이 여럿일 수 있다. 직관 절의 $X^-$ 와 $X^+$ 는 둘 다 $Y$ 위의 극소 모형이고, 이 정리의 가장 작은 예다.

## 불변량

**정리(Batyrev, 1999).** 쌍유리 동치인 두 Calabi–Yau 다양체는 Betti 수가 같다[^3].

같은 증명이 표준인자가 같은 쌍유리 동치 다양체에 적용되므로, flop 으로 이어진 두 매끄러운 사영 다양체는 Betti 수가 같다. 삼차원에서는 Bridgeland 가 두 다양체의 연접층의 [유도 범주](derived-categories.md)가 동치임을 보였다[^4]. 반면 두 다양체는 서로 동형이 아닐 수 있다.

# 활용

- 극소 모형의 분류. 극소 모형 프로그램을 돌려 얻은 모형이 하나로 정해지지 않으므로, flop 으로 서로 옮겨지는 모형들을 한 묶음으로 보고 그 묶음을 분류한다. 삼차원 Calabi–Yau 다양체의 쌍유리 분류가 이 방식이다.
- 유도 범주와 쌍유리 기하. 유도 범주가 flop 에서 보존된다는 사실은 "쌍유리 동치이고 표준인자가 같은 다양체는 유도 범주가 같다" 는 Bondal–Orlov 추측(Bondal–Orlov conjecture)의 근거가 된다.
- 토릭 다양체의 계산. 부채의 다른 쪼개기가 flop 으로 이어진 다양체들을 주므로, 토릭 다양체에서 flop 은 다면체를 다르게 나누는 일로 계산된다.

[^1]: J. Kollár, "Flops", *Nagoya Mathematical Journal* 113 (1989), 15–36.
[^2]: Y. Kawamata, "Flops connect minimal models", *Publications of the Research Institute for Mathematical Sciences* 44 (2008), 419–423.
[^3]: V. V. Batyrev, "Birational Calabi–Yau n-folds have equal Betti numbers", in *New Trends in Algebraic Geometry*, London Mathematical Society Lecture Note Series 264, Cambridge University Press, 1999, 1–11.
[^4]: T. Bridgeland, "Flops and derived categories", *Inventiones Mathematicae* 147 (2002), 613–632.

# 연관 문서

## 선수지식

- [극소 모형 프로그램](minimal-model-program.md)
- [토릭 다양체](toric-varieties.md)

## 더 알아보기

아직 연결한 문서가 없다.

#algebra #complex_analysis

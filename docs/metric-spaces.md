# 거리 공간

거리 공간은 두 점의 거리를 정하여 가까움과 수렴을 비교할 수 있게 한 집합이다.

## 정의

X를 집합, x, y, z를 X의 원소, d를 두 점에 음이 아닌 실수를 대응시키는 함수라 하자. 다음 조건을 만족하면 d는 거리이고, X와 d의 쌍은 거리 공간이다.

$$
\begin{aligned}
d(x,y)&\ge0\\
d(x,y)=0&\iff x=y\\
d(x,y)&=d(y,x)\\
d(x,z)&\le d(x,y)+d(y,z)
\end{aligned}
$$

마지막 조건은 삼각부등식이다. 중간 점을 거쳐 가는 두 거리의 합이 직접 거리보다 작을 수 없다는 조건이다.

양의 실수 r을 반지름이라 하자. 중심 x의 열린 공은 다음 집합이다.

$$
B(x,r)=\{y\in X:d(x,y)<r\}
$$

## 성질

실수의 절댓값 차는 거리다. 평면에서는 좌표를 x₁, x₂와 y₁, y₂로 쓰면 아래 두 함수가 모두 거리다.

$$
\begin{aligned}
d_2(x,y)&=\sqrt{(x_1-y_1)^2+(x_2-y_2)^2}\\
d_1(x,y)&=|x_1-y_1|+|x_2-y_2|
\end{aligned}
$$

첫 거리의 열린 공은 원 내부, 두 번째 거리의 열린 공은 마름모 내부다. 점 집합이 같아도 거리 선택에 따라 공의 모양과 수치가 달라진다.

양의 정수 n으로 인덱싱한 X의 수열을 xₙ, 극한 후보를 p라 하자. 거리 공간의 수렴은 다음과 같다.

$$
d(x_n,p)\longrightarrow0\quad(n\to\infty)
$$

서로 다른 점의 거리를 모두 1로 정하는 이산 거리에서는 수렴하는 수열이 결국 극한 점에 고정되어야 한다. 반지름 1/2인 공에 그 점 하나만 있기 때문이다.

거리의 제곱은 일반적으로 거리가 아니다. 실수 0, 1, 2에 대해 양 끝의 거리 제곱은 4이고 두 중간 거리 제곱의 합은 2여서 삼각부등식이 깨진다.

## 활용

근사 오차, 데이터 사이의 차이, 최적화의 수렴, 함수 공간의 해석을 표현한다. 두 대상의 차이를 수치화했다고 해서 자동으로 거리가 되는 것은 아니며 네 조건을 확인해야 한다.

## 기타 참고 문헌

- [Jiří Lebl, Metric spaces](https://www.jirka.org/ra/html/sec_metric.html): 거리의 공리와 예시.
- [Jiří Lebl, Sequences and convergence](https://www.jirka.org/ra/html/sec_metseqs.html): 거리 공간에서의 수렴과 극한의 유일성.
- 이산 거리 수렴 조건과 거리 제곱의 반례는 위에서 직접 확인했다.

# 연관 문서

## 선수지식

- [함수](functions.md)
- [수열의 극한](limits.md)

## 더 알아보기

- [연속함수](continuity.md)
- [Cauchy 수열과 완비성](completeness.md)
- [볼록성](convexity.md)
- [내적 공간](inner-product-spaces.md)

#topology #analysis

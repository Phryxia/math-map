# Pascal 정리

# 개요

**Pascal 정리(Pascal's theorem)** 는 원뿔곡선 위의 여섯 점을 차례로 이은 육각형에서 마주 보는 세 쌍의 변을 연장해 얻는 세 교점이 한 직선 위에 있다는 정리다. 포물선 $y=x^2$ 위의 여섯 점으로 육각형을 그리고 마주 보는 변끼리 연장하면 교점 세 개가 나오는데, 이 세 점이 일직선에 놓이는 것은 그림만으로는 우연처럼 보인다. 이 정리는 변 여섯 개를 세 개씩 묶은 두 삼차곡선에 [Cayley–Bacharach 정리](cayley-bacharach-theorem.md)를 써서, 세 점이 언제나 한 직선 위에 있다는 것을 보인다.

# 직관

포물선 $y=x^2$ 위에서 $x$ 좌표가 $-1,0,1,3,2,-3$ 인 점을 차례로 $A,B,C,D,E,F$ 라 한다.

$$
A=(-1,1),\quad B=(0,0),\quad C=(1,1),\quad D=(3,9),\quad E=(2,4),\quad F=(-3,9)
$$

마주 보는 변은 $AB$ 와 $DE$, $BC$ 와 $EF$, $CD$ 와 $FA$ 다. 각 쌍의 직선과 교점은 다음과 같다.

| 변의 쌍  | 두 직선                 | 교점      |
| -------- | ----------------------- | --------- |
| $AB$, $DE$ | $y=-x$, $y=5x-6$        | $(1,-1)$  |
| $BC$, $EF$ | $y=x$, $y=-x+6$         | $(3,3)$   |
| $CD$, $FA$ | $y=4x-3$, $y=-4x-3$     | $(0,-3)$  |

세 교점은 모두 직선 $y=2x-3$ 위에 있다.

포물선을 다른 원뿔곡선으로, 여섯 점을 다른 점으로 바꾸어도 같은 일이 생긴다. 원 위의 정육각형에서는 마주 보는 변이 평행이라 교점이 없는데, 사영평면에서는 평행선이 무한원점에서 만나고 세 무한원점이 무한원직선 위에 있다.

# 정의

## 원뿔곡선

[사영다양체](projective-varieties.md)인 사영평면 $\mathbb P^2$ 에서 이차 동차 다항식의 영점 집합을 **원뿔곡선(conic)** 이라 한다. 두 일차식의 곱으로 인수분해되지 않으면 기약 원뿔곡선이다. 직관 절의 포물선은 동차식 $yz-x^2$ 의 영점이다.

## 육각형과 Pascal 직선

원뿔곡선 위의 서로 다른 여섯 점을 순서대로 놓은 $(A,B,C,D,E,F)$ 를 내접 육각형이라 하고, 직선 $AB$, $BC$, $CD$, $DE$, $EF$, $FA$ 를 그 변이라 한다. $AB$ 와 $DE$, $BC$ 와 $EF$, $CD$ 와 $FA$ 를 마주 보는 변이라 하고, 세 교점이 놓이는 직선을 **Pascal 직선(Pascal line)** 이라 한다. 직관 절의 Pascal 직선은 $y=2x-3$ 이다.

# 성질

## Pascal 정리

정리. 기약 원뿔곡선 $Q$ 에 내접한 육각형의 마주 보는 세 쌍의 변의 교점 $P\_1,P\_2,P\_3$ 은 한 직선 위에 있다[^1].

증명의 요지. $C\_1=AB\cdot CD\cdot EF$ 와 $C\_2=BC\cdot DE\cdot FA$ 는 삼차곡선이고 꼭짓점 여섯 개와 $P\_1,P\_2,P\_3$ 에서 만난다. $P\_1$ 과 $P\_2$ 를 지나는 직선 $L$ 과 $Q$ 를 합친 삼차곡선 $Q\cdot L$ 은 아홉 점 가운데 여덟 점을 지나므로, Cayley–Bacharach 정리로 $P\_3$ 도 지난다. $P\_3$ 이 $Q$ 위에 있으면 $Q$ 와 변 $CD$ 가 세 점 $C$, $D$, $P\_3$ 에서 만나 Bézout 정리에 어긋나므로 $P\_3$ 은 $L$ 위에 있다.

## 역

원뿔곡선 위에 있는지 모르는 여섯 점에서 마주 보는 변의 세 교점이 한 직선 위에 있고, 여섯 점 가운데 어느 세 점도 한 직선 위에 있지 않으면 여섯 점은 한 원뿔곡선 위에 있다. 이것을 Braikenridge–Maclaurin 정리(Braikenridge–Maclaurin theorem)라 한다[^1]. 다섯 점을 지나는 원뿔곡선이 하나이므로, 이 정리로 자와 직선만 써서 그 원뿔곡선 위의 점을 더 작도한다.

## 퇴화한 원뿔곡선

원뿔곡선이 두 직선 $\ell$, $m$ 의 합이고 $A,C,E$ 가 $\ell$ 위에, $B,D,F$ 가 $m$ 위에 있어도 같은 결론이 성립한다. 이것을 [Pappus 정리](pappus-theorem.md)라 한다. 증명은 $Q=\ell\cdot m$ 으로 둔 같은 논법이다.

## Pascal 직선의 수

여섯 점을 육각형으로 잇는 순서는 회전 $6$ 가지와 뒤집기 $2$ 가지를 빼면 $6!/12=60$ 가지이고, 순서마다 Pascal 직선이 하나 나온다. 이 60 개의 직선은 세 개씩 한 점에서 만나는 Steiner 점(Steiner point) 20 개를 정한다[^2].

## 쌍대

점과 직선을 맞바꾸면 원뿔곡선에 외접한 육각형, 곧 변이 모두 원뿔곡선에 접하는 육각형에서 마주 보는 꼭짓점을 잇는 세 대각선이 한 점에서 만난다는 Brianchon 정리(Brianchon's theorem)가 나온다[^1].

# 활용

- [유한 사영평면](finite-projective-planes.md). 나눗셈환 위의 사영평면에서 Pappus 정리가 성립하는 것과 그 나눗셈환이 가환인 것이 동치다[^3]. 체 위의 평면 $\mathrm{PG}(2,q)$ 에서는 Pappus 정리가 성립한다.
- 원뿔곡선의 작도. 다섯 점이 주어지면 그 원뿔곡선 위의 여섯째 점을 Pascal 직선으로 작도한다.

[^1]: H. S. M. Coxeter, *Projective Geometry*, 2판, Springer, 1987, 9 장.
[^2]: J. Conway, A. Ryba, "The Pascal mysticum demystified", *The Mathematical Intelligencer* 34 (2012), 4–8.
[^3]: D. Hilbert, *Grundlagen der Geometrie*, Teubner, 1899, 6 장.

# 연관 문서

## 선수지식

- [Cayley–Bacharach 정리](cayley-bacharach-theorem.md)

## 더 알아보기

- [Pappus 정리](pappus-theorem.md)

#algebra #combinatorics
